import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Forest from '../img/forest.jpg'


const ImageDetail = ({title}) => {
  return (
    <View>

      <Image source={title.img} />

      <Text style={styles.textStyle}>Name: {title.title}</Text>

      <Text>Score: {title.score}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },

});

export default ImageDetail;