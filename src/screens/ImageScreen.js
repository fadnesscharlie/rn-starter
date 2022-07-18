import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  
  let db = {
    title: 'Forest',
    img: require('../img/forest.jpg'),
    score: 1
  }
  
  return (
    <View>

      <ImageDetail title={db} />
      <ImageDetail title={db} />
      <ImageDetail title={db} />

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },

});

export default ImageScreen;