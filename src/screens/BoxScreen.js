import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <>
      <Text style={{fontSize: 30, marginBottom: 30}}>Box Screen!</Text>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child 1</Text>
        <Text style={styles.textTwoStyle}>Child 2</Text>
        <Text style={styles.textThreeStyle}>Child 3</Text>
      </View>
    </>
  );
};

/* 
Parent:
  alignITems
  justifyContent
  flexDirection

Child:
  flex
  alignSelf --- Overrides parent alignItems

*/


const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    // alignItems: 'center',
    // flexDirection: 'row',
 
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    height: 200,
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: "red",
    flex: 5
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: "red",
    flex: 3,
    alignSelf: 'center'
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: "red",
    flex: 2,

    // position: 'absolute',
    
    // top, bottom, left, right -> 0
    // ...StyleSheet.absoluteFillObject


  },
});

export default BoxScreen;
