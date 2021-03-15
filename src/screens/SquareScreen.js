import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // action === {type: CHANGE_RED||CHANGE_GREEN||CHANGE_BLUE, payload: 15||-15}

  switch (action.type) {
    case 'CHANGE_RED':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'CHANGE_GREEN':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
      payload;
    case 'CHANGE_BLUE':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: 'CHANGE_RED', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'CHANGE_RED', payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'CHANGE_GREEN', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'CHANGE_GREEN', payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'CHANGE_BLUE', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'CHANGE_BLUE', payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
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
