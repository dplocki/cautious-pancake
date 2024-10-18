import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MaxQuoteView from './MaxQuoteView';
import QuoteList from './QuotesList';
import NumberInput from './NumberInput';
import knapsackProblem from './knapsack.problem';

const App = () => {
  const [maxQuote, setMaxQuote] = useState(null);
  const [list, setList] = useState([]);

  const sumOfAllSelected = list
    .filter(item => item.isSelected)
    .reduce((p, item) => p + item.value, 0);

  const setMaxQuoteWrapper = (value) => {
    if (!value) {
      setList([]);
      setMaxQuote(null);
      return;
    }

    setMaxQuote(value);
  };

  const handleAddItem = (value) => {
    const [_, newList] = knapsackProblem(maxQuote, [
      ...list,
      {
        id: Date.now().toString(),
        value: +value,
        isSelected: false,
      }
    ]);

    setList(newList);
  };

  return (
    <View style={styles.mainView}>
      <MaxQuoteView maxQuote={maxQuote} setMaxQuote={setMaxQuoteWrapper} sumOfAllSelected={sumOfAllSelected} />

      {maxQuote !== null && <QuoteList maxQuote={maxQuote} list={list} setList={setList} />}
      {maxQuote !== null && <NumberInput onConfirm={handleAddItem} placeholder="Add to list" buttonText="Add" />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;