import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MaxQuoteView from './MaxQuoteView';
import QuoteList from './QuotesList';

const App = () => {
  const [maxQuote, setMaxQuote] = useState(null);

  return (
    <View style={styles.styles}>
      <MaxQuoteView maxQuote={maxQuote} setMaxQuote={setMaxQuote} />

      {maxQuote !== null && <QuoteList maxQuote={maxQuote} />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
