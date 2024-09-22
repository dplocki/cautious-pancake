import { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';
import ListItem from './ListItem';

const QuoteList = ({ maxQuote }) => {
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    if (!bottomInputValue) {
      return;
    }

    const newList = knapsackProblem([...list, {
      id: Date.now().toString(),
      value: bottomInputValue,
      multiplayer: 1,
      taken: false,
    }]);

    setList(newList);
    setBottomInputValue('');
  }

  const handleRemoveItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <>
      <FlatList
        data={list}
        renderItem={({ item }) => <ListItem item={item} onRemove={handleRemoveItem} />}
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
        <Button title="Add" onPress={handleAddItem} />
      </View>
    </>
  );
};

export default QuoteList;
