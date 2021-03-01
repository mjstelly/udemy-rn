import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

const ListScreen = () => {
  const stuff = [
    { name: "stuff1", age: "20" },
    { name: "stuff2", age: "21" },
    { name: "stuff3", age: "22" },
    { name: "stuff4", age: "23" },
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(stuff) => stuff.name}
      data={stuff}
      renderItem={({ item }) => {
        return (
          <View style={styles.borderStyle}>
            <Text style={styles.textStyle}>
              {item.name} - {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  borderStyle: {
    borderColor: "#000",
    borderRadius: 1,
    backgroundColor: "cyan",
    flex: 1,
    alignContent: "center",
  },
});

export default ListScreen;
