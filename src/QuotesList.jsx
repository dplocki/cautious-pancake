import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import knapsackProblem from './knapsack.problem';

const QuoteList = ({ maxQuote, list, setList }) => {

  const handleRemoveItem = (id) => {
    const [_, newList] = knapsackProblem(maxQuote, list.filter(item => item.id !== id));
    setList(newList);
  };

  const handleCopyItem = (id) => {
    const [_, newList] = knapsackProblem(maxQuote, [
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
    <FlatList
      style={styles.list}
      data={list}
      renderItem={({ item }) => <ListItem style={styles.item} item={item} onRemove={handleRemoveItem} onCopy={handleCopyItem} />}
      keyExtractor={item => item.id}
    />
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
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
  })).isRequired,
  maxQuote: PropTypes.number.isRequired,
  setList: PropTypes.func.isRequired,
};

export default QuoteList;
