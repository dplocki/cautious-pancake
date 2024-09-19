import { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated, PanResponder } from 'react-native';
import styles from './styles';

const ListItem = ({ item, onRemove }) => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gestureState) => {
      if (Math.abs(gestureState.dx) > 120) {
        onRemove(item.id);
      } else {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      }
    },
  });

  return (
    <Animated.View
      style={{ transform: [{ translateX: pan.x }] }}
      {...panResponder.panHandlers}
    >
      <View style={styles.item}>
        <Text>{item.value}</Text>
      </View>
    </Animated.View>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
  panResponder: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  pan: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
};

export default ListItem;
