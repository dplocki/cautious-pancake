import PropTypes from 'prop-types';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles';
import NumberInput from './NumberInput';

const MaxQuoteView = ({ maxQuote, setMaxQuote }) => {

  const handleMaxQuoteSetup = (value) => {
    setMaxQuote(value);
  };

  const handleMaxQuoteClear = () => {
    setRawMaxQuote('');
    setMaxQuote(null);
  };

  return (
    <View style={styles.maxQuoteView}>
      {maxQuote === null ? (
        <NumberInput buttonText="Add" placeholder="Enter maximum qoute" onConfirm={handleMaxQuoteSetup} />
      ) : (
        <>
          <Text>{maxQuote}</Text>
          <Button title="Clear" onPress={handleMaxQuoteClear} />
        </>
      )}
    </View>
  );
};

MaxQuoteView.propTypes = {
  maxQuote: PropTypes.number.isRequired,
  setMaxQuote: PropTypes.func.isRequired,
};

export default MaxQuoteView;