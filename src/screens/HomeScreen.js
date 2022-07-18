import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

 
const HomeScreen = ({navigation}) => {
  // console.log('Props', props);
  console.log('Reloaded!');
  return (
    <View>
      <Text style={styles.text}>HomeScreen pie for me2</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text style={styles.text}>Go to Components</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.text}>Go to List Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Image")}>
        <Text style={styles.text}>Go to Images Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Counter")}>
        <Text style={styles.text}>Go to Counter Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ColorScreen")}>
        <Text style={styles.text}>Go to Color Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SquareScreen")}>
        <Text style={styles.text}>Go to SquareScreen(colors) Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TextScreen")}>
        <Text style={styles.text}>Go to TextScreen Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("BoxScreen")}>
        <Text style={styles.text}>Go to BoxScreen Demo</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
