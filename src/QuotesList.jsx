import { useState } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import knapsackProblem from './knapsack.problem';
import NumberInput from './NumberInput';

const QuoteList = ({ maxQuote }) => {
  const [list, setList] = useState([]);

  const handleAddItem = (value) => {
    const [sumOfAllSelected, newList] = knapsackProblem(maxQuote, [
      ...list,
      {
        id: Date.now().toString(),
        value: +value,
        isSelected: false,
      }
    ]);

    setList(newList);
  }

  const handleRemoveItem = (id) => {
    const [sumOfAllSelected, newList] = knapsackProblem(maxQuote, list.filter(item => item.id !== id));
    setList(newList);
  };

  const handleCopyItem = (id) => {
    const [sumOfAllSelected, newList] = knapsackProblem(maxQuote, [
      ...list,
      {
        id: Date.now().toString(),
        value: list.find(item => item.id === id).value,
        isSelected: false,
      }
    ]);

    setList(newList);
  }

  return (
    <>
      <FlatList
        style={styles.list}
        data={list}
        renderItem={({ item }) => <ListItem style={styles.item} item={item} onRemove={handleRemoveItem} onCopy={handleCopyItem} />}
        keyExtractor={item => item.id}
      />
      <NumberInput onConfirm={handleAddItem} placeholder="Add to list" buttonText="Add" />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
  }
});

QuoteList.propTypes = {
  maxQuote: PropTypes.number.isRequired,
};

export default QuoteList;
