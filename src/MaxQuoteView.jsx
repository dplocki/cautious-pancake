import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles';

const MaxQuoteView = ({ maxQuote, setMaxQuote }) => {
  const [rawMaxQuote, setRawMaxQuote] = useState('');

  const handleMaxQuoteSetup = () => {
    const number = Number(rawMaxQuote);
    if (rawMaxQuote && !isNaN(number)) {
      setMaxQuote(number);
      setRawMaxQuote(number.toString());
    }
  };

  const handleMaxQuoteClear = () => {
    setRawMaxQuote('');
    setMaxQuote(null);
  };

  return (
    <View style={styles.maxQuoteView}>
      {maxQuote === null ? (
        <>
          <TextInput
            style={styles.edit}
            value={rawMaxQuote}
            onChangeText={setRawMaxQuote}
            keyboardType="numeric"
            placeholder="Enter number"
          />
          <Button title="Submit" onPress={handleMaxQuoteSetup} />
        </>
      ) : (
        <>
          <Text>{maxQuote}</Text>
          <Button title="Clear" onPress={handleMaxQuoteClear} />
        </>
      )}
    </View>
  );
};

export default MaxQuoteView;