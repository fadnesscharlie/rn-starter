import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  let name = 'Billy'
  
  return (
    <View>
      <Text style={styles.textStyle}>Component stuff</Text>
      <Text style={styles.name}>My name is {name} Bob</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
  name: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
