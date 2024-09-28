import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

const NumberInput = ({ placeholder, onConfirm }) => {
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
        keyboardType="numeric"
        placeholder={placeholder}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>)
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginTop: 20 },
  textInput: { flex: 1, borderWidth: 1, padding: 10 },
});

NumberInput.propTypes = {
  placeholder: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
};

export default NumberInput;
