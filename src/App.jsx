import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Animated, PanResponder } from 'react-native';
import { StyleSheet } from 'react-native-web';

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
      style={{ transform: [{ translateX: pan.x }] }}
      {...panResponder.panHandlers}
    >
      <View style={styles.item}>
        <Text>{item.value}</Text>
      </View>
    </Animated.View>
  );
};

const App = () => {
  const [maxQoute, setMaxQoute] = useState('');
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleMaxQouteSetup = () => {
    if (maxQoute) {
      console.log('Top input submitted:', maxQoute);
      setMaxQoute('');
    }
  };

  const handleMaxQouteClear = () => {
    if (!maxQoute) {
      setMaxQoute('');
    }
  }

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
    <View style={styles.styles}>
      <View style={styles.maxQouteView}>
        <TextInput
          style={styles.edit}
          value={maxQoute}
          onChangeText={setMaxQoute}
          keyboardType="numeric"
          placeholder="Enter number"
        />
        <Button title="Submit" onPress={handleMaxQouteSetup} />
        <Button title='Clear' onPress={handleMaxQouteClear} />
      </View>

      <FlatList
        data={list}
        renderItem={({ item }) => <ListItem item={item} onRemove={removeItem} />}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />

      <View style={styles.addItemView}>
        <TextInput
          style={styles.edit}
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

const styles = StyleSheet.create({
  mainView: { flex: 1, padding: 20, innerWidth: '100%' },
  maxQouteView: { flexDirection: 'row', marginBottom: 20 },
  edit: { flex: 1, borderWidth: 1, padding: 10, marginRight: 10 },
  itemList: { flex: 1 },
  item: { padding: 20, backgroundColor: '#f0f0f0', marginVertical: 5 },
  addItemView: { flexDirection: 'row', marginTop: 20 },
});

export default App;