import react, { useReducer, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_NUMBER = 25;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0 
      ? state
      : {...state, red: state.red + action.amount}
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0 
      ? state
      : {...state, green: state.green + action.amount}
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0 
      ? state
      : {...state, blue: state.blue + action.amount}
    default:
      return state;
  }
}
 
const SquareScreen = () => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const {red, green, blue} = state


  // Without a reducer
  const setColor = (color, change) => {
    // color === red, green, blue
    // change === +-COLOR_NUMBER

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        // onIncrease={() => setColor("red", COLOR_NUMBER)}
        // onDecrease={() => setColor("red", -1 * COLOR_NUMBER)}
        onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_NUMBER})}
        onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_NUMBER})}
        color="red"
      />
      <ColorCounter
        // onIncrease={() => setColor('blue', COLOR_NUMBER)}
        // onDecrease={() => setColor('blue', -1 * COLOR_NUMBER)}
        onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_NUMBER})}
        onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_NUMBER})}
        color="blue"
      />
      <ColorCounter
        // onIncrease={() => setColor('green', + COLOR_NUMBER)}
        // onDecrease={() => setColor('green', -1 * COLOR_NUMBER)}
        onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_NUMBER})}
        onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_NUMBER})}
        color="green"
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;
