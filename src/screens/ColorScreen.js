import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const ColorScreen = () => {

  let [colors, setColors] = useState([])

  return (
    <View>
      {/* <Text style={{fontSize: 30}}>Colors! </Text> */}

      <TouchableOpacity

      onPress={() => {
        setColors([...colors, randomRGB()])
      }}
      >
        <Text style={{ fontSize: 30 }}>Pick a Color</Text>
      </TouchableOpacity>


      <FlatList
      data={colors}
      keyExtractor={(item) => item}
      renderItem={({item}) => {
        return (
          <View
        style={{ height: 100, width: 100, backgroundColor: item }}
      ></View>
        )
      }}
      />

      {/* <View
        style={{ height: 100, width: 100, backgroundColor: randomRGB() }}
      ></View> */}

    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30,
//   },
// });

export default ColorScreen;
