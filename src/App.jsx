import { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';
import ListItem from './ListItem';

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
        <Button title="Clear" onPress={handleMaxQouteClear} />
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

export default App;
