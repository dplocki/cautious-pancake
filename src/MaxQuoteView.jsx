import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet } from 'react-native';
import NumberInput from './NumberInput';

const MaxQuoteView = ({ maxQuote, setMaxQuote, sumOfAllSelected }) => {

  const handleMaxQuoteSetup = (value) => {
    setMaxQuote(+value);
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
          <View style={styles.textContainer}>
            <Text style={styles.text}>{`${maxQuote} PLN`}</Text>
            <Text style={styles.sumText}>{`${sumOfAllSelected} PLN`}</Text>
          </View>
          <Button title="Clear" onPress={handleMaxQuoteClear} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  sumText: {
    flex: 1,
    fontSize: 8,
    textAlign: 'center',
  }
});

MaxQuoteView.propTypes = {
  maxQuote: PropTypes.number,
  sumOfAllSelected: PropTypes.number.isRequired,
  setMaxQuote: PropTypes.func.isRequired,
};

export default MaxQuoteView;