import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Animated, PanResponder } from 'react-native';

const ListItem = ({ item, onRemove }) => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gestureState) => {
      if (Math.abs(gestureState.dx) > 120) {
        onRemove(item.id);
      } else {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      }
    },
  });

  return (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }],
      }}
      {...panResponder.panHandlers}
    >
      <View style={{ padding: 20, backgroundColor: '#f0f0f0', marginVertical: 5 }}>
        <Text>{item.value}</Text>
      </View>
    </Animated.View>
  );
};

const App = () => {
  const [topInputValue, setTopInputValue] = useState('');
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleTopSubmit = () => {
    if (topInputValue) {
      // Process the top input value here
      console.log('Top input submitted:', topInputValue);
      setTopInputValue('');
    }
  };

  const handleBottomSubmit = () => {
    if (bottomInputValue) {
      setList([...list, { id: Date.now().toString(), value: bottomInputValue }]);
      setBottomInputValue('');
    }
  };

  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, padding: 10, marginRight: 10 }}
          value={topInputValue}
          onChangeText={setTopInputValue}
          keyboardType="numeric"
          placeholder="Enter number"
        />
        <Button title="Submit" onPress={handleTopSubmit} />
      </View>

      <FlatList
        data={list}
        renderItem={({ item }) => <ListItem item={item} onRemove={removeItem} />}
        keyExtractor={item => item.id}
        style={{ flex: 1 }}
      />

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, padding: 10, marginRight: 10 }}
          value={bottomInputValue}
          onChangeText={setBottomInputValue}
          keyboardType="numeric"
          placeholder="Add to list"
        />
        <Button title="Add" onPress={handleBottomSubmit} />
      </View>
    </View>
  );
};

export default App;