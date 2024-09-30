import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet } from 'react-native';
import NumberInput from './NumberInput';

const MaxQuoteView = ({ maxQuote, setMaxQuote }) => {

  const handleMaxQuoteSetup = (value) => {
    setMaxQuote(value);
  };

  const handleMaxQuoteClear = () => {
    setMaxQuote(null);
  };

  return (
    <View style={styles.container}>
      {maxQuote === null ? (
        <NumberInput buttonText="Add" placeholder="Enter maximum qoute" onConfirm={handleMaxQuoteSetup} />
      ) : (
        <>
          <Text style={styles.text}>{`${maxQuote} PLN`}</Text>
          <Button title="Clear" onPress={handleMaxQuoteClear} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
});

MaxQuoteView.propTypes = {
  maxQuote: PropTypes.number.isRequired,
  setMaxQuote: PropTypes.func.isRequired,
};

export default MaxQuoteView;