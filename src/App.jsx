import { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';
import ListItem from './ListItem';

const App = () => {
  const [maxQoute, setMaxQoute] = useState(null);
  const [maxRawQoute, setRawMaxQoute] = useState('');
  const [bottomInputValue, setBottomInputValue] = useState('');
  const [list, setList] = useState([]);

  const isSetUpPhase = () => {
    return maxQoute !== null;
  }

  const handleMaxQouteSetup = () => {
    if (!maxRawQoute) {
      return;
    }

    const transformNumber = +maxRawQoute;
    if (Number.isNaN(transformNumber)) {
      return;
    }

    setMaxQoute(transformNumber);
    setRawMaxQoute(transformNumber.toString());
  };

  const handleMaxQouteClear = () => {
    if (!maxRawQoute) {
      setRawMaxQoute('');
      setMaxQoute(null);
    }
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
      <View style={styles.maxQouteView}>
        <TextInput
          style={styles.edit}
          value={maxRawQoute}
          disabled={isSetUpPhase()}
          onChangeText={setRawMaxQoute}
          keyboardType="numeric"
          placeholder="Enter number"
        />
        {!isSetUpPhase() && <Button title="Submit" onPress={handleMaxQouteSetup} />}
        <Button title="Clear" onPress={handleMaxQouteClear} />
      </View>

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
