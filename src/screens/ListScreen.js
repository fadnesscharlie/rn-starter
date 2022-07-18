import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "1" },
    { name: "Friend #2", age: "1" },
    { name: "Friend #3", age: "1" },
    { name: "Friend #4", age: "1" },
    { name: "Friend #5", age: "1" },
    { name: "Friend #6", age: "1" },
    { name: "Friend #7", age: "1" },
    { name: "Friend #8", age: "1" },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={{ marginVertical: 50 }}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

export default ListScreen;
