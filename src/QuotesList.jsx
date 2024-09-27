import { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';
import ListItem from './ListItem';
import knapsackProblem from './knapsack.problem';

const QuoteList = ({ maxQuote }) => {
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    if (!bottomInputValue) {
      return;
    }

    const [sumOfAllSelected, newList] = knapsackProblem(maxQuote, [
      ...list,
      {
        id: Date.now().toString(),
        value: +bottomInputValue,
        isSelected: false,
      }
    ]);

    setList(newList);
    setBottomInputValue('');
  }

  const handleRemoveItem = (id) => {
    const [sumOfAllSelected, newList] = knapsackProblem(maxQuote, list.filter(item => item.id !== id));
    setList(newList);
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

QuoteList.propTypes = {
  maxQuote: PropTypes.number.isRequired,
};

export default QuoteList;
