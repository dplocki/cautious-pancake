import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

const NumberInput = ({ placeholder, onConfirm, buttonText }) => {
  const [rawInputValue, setRawInputValue] = useState('');

  const handleSubmit = () => {
    if (!rawInputValue) {
      return;
    }

    onConfirm(+rawInputValue)
    setRawInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={rawInputValue}
        onChangeText={setRawInputValue}
        inputMode="numeric"
        placeholder={placeholder}
        onSubmitEditing={handleSubmit}
      />
      <Button title={buttonText} onPress={handleSubmit} />
    </View>)
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    padding: 10
  },
});

NumberInput.propTypes = {
  placeholder: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default NumberInput;
