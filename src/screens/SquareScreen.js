import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${blue}, ${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;
