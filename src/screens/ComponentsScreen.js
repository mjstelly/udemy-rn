import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const myName = "Michael";
  const greeting = <Text>My name is {myName}!</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
