import { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';
import ListItem from './ListItem';
import MaxQuoteView from './MaxQuoteView';

const App = () => {
  const [maxQuote, setMaxQuote] = useState(null);
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [list, setList] = useState([]);

  const isSetUpPhase = () => {
    return maxQuote !== null;
  }

  const handleBottomSubmit = () => {
    if (bottomInputValue) {
      setList([...list, { id: Date.now().toString(), value: bottomInputValue }]);
      setBottomInputValue('');
    }
  };

  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <View style={styles.styles}>
      <MaxQuoteView maxQuote={maxQuote} setMaxQuote={setMaxQuote} />

      {isSetUpPhase() &&
      <FlatList
        data={list}
        renderItem={({ item }) => <ListItem item={item} onRemove={removeItem} />}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />}

      {isSetUpPhase() &&
      <View style={styles.addItemView}>
        <TextInput
          style={styles.edit}
          value={bottomInputValue}
          onChangeText={setBottomInputValue}
          keyboardType="numeric"
          placeholder="Add to list"
        />
        <Button title="Add" onPress={handleBottomSubmit} />
      </View>}

    </View>
  );
};

export default App;
