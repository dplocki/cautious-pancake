import { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';
import ListItem from './ListItem';

const QuoteList = ({ maxQuote }) => {
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [list, setList] = useState([]);

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
    <>
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
    </>
  );
};

export default QuoteList;
