import React from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import ColorScreen from './src/screens/ColorScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

import ColorCounter from './src/components/ColorCounter';

type RootStackParamList = {
  Box: undefined;
  Color: undefined;
  ColorCounter: undefined;
  Components: undefined;
  Counter: undefined;
  Home: undefined;
  Image: undefined;
  List: undefined;
  Square: undefined;
  Text: undefined;
}

const RootStack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Box" component={BoxScreen} />
      <RootStack.Screen name="Color" component={ColorScreen} />
      <RootStack.Screen name="Components" component={ComponentsScreen} />
      <RootStack.Screen name="Counter" component={CounterScreen} />
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Image" component={ImageScreen} />
      <RootStack.Screen name="List" component={ListScreen} />
      <RootStack.Screen name="Square" component={SquareScreen} />
      <RootStack.Screen name="Text" component={TextScreen} />
    </RootStack.Navigator>
  );
}

export default function App() {
  return <NavigationContainer><AppStack /></NavigationContainer>;
}