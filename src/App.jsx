import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MaxQuoteView from './MaxQuoteView';
import QuoteList from './QuotesList';

const App = () => {
  const [maxQuote, setMaxQuote] = useState(null);
  const [list, setList] = useState([]);

  return (
    <View style={styles.mainView}>
      <MaxQuoteView maxQuote={maxQuote} setMaxQuote={setMaxQuote} />

      {maxQuote !== null && <QuoteList maxQuote={maxQuote} list={list} setList={setList} />}
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