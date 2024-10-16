import { useState } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({ item, onRemove, onCopy }) => {
  const pan = useState(new Animated.ValueXY())[0];
  const returnToOriginalPosition = () => Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
    onPanResponderReject: returnToOriginalPosition,
    onPanResponderTerminate: returnToOriginalPosition,
    onPanResponderTerminationRequest: returnToOriginalPosition,
    onPanResponderEnd: returnToOriginalPosition,
    onPanResponderRelease: (e, gestureState) => {
      if (Math.abs(gestureState.dx) > 120) {
        onRemove(item.id);
      } else if (Math.abs(gestureState.dy) > 120) {
        onCopy(item.id);
      }

      returnToOriginalPosition();
    },
  });

  return (
    <Animated.View
      style={{ transform: [{ translateX: pan.x, translateY: pan.y }] }}
      {...panResponder.panHandlers}
    >
      <View style={item.isSelected ? styles.itemSelect : styles.item}>
        <Text style={styles.itemText}>{item.value} PLN</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
	item: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 20,
    margin: 10,
  },
	itemSelect: {
    padding: 10,
    backgroundColor: '#5b81ae',
    marginVertical: 5,
    borderRadius: 20,
    margin: 10,
  },
  itemText: {
    paddingLeft: 20,
    textAlign: 'center',
  }
});

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
