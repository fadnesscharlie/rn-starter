import react, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ColorCounter = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.color}</Text>
      
      <TouchableOpacity 
      onPress={() => props.onIncrease()}>
        <Text style={styles.text}>More {props.color}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.onDecrease()}>
        <Text style={styles.text}>Less {props.color}</Text>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColorCounter;
