import { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated, PanResponder } from 'react-native';
import styles from './styles';

const ListItem = ({ item, onRemove, onCopy }) => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gestureState) => {
      if (Math.abs(gestureState.dx) > 120) {
        onRemove(item.id);
      } else if (Math.abs(gestureState.dy) > 30) {
        onCopy(item.id);
      } else {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      }
    },
  });

  return (
    <Animated.View
      style={{ transform: [{ translateX: pan.x, translateY: pan.y }] }}
      {...panResponder.panHandlers}
    >
      <View style={item.isSelected ? styles.itemSelect : styles.item}>
        <Text>{item.value} PLN</Text>
      </View>
    </Animated.View>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default ListItem;
