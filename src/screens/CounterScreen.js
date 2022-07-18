import react, {useReducer, useState} from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const COUNT_INCREMENT = 3

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload};
      case 'decrease':
      return { ...state, count: state.count - action.payload};
    default:
      return state
  }
}

const Counterscreen = () => {
  // let [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, {count: 0})
  const {count} = state;


  return (
    <View>
      <Text style={styles.text}>Count: {count}</Text>

      <TouchableOpacity 
      // onPress={() => setCount(count+1)}
      onPress={() => dispatch({type: 'increase', payload: COUNT_INCREMENT})}
      >
        <Text style={styles.text}>
          Increase
          </Text>
      </TouchableOpacity>


      <TouchableOpacity 
      // onPress={() => setCount(count-1)}
      onPress={() => dispatch({type: 'decrease', payload: COUNT_INCREMENT})}
      >
        <Text style={styles.text}>
          Decrease
          </Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default Counterscreen;
