import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Color" component={ColorScreen} />
        <RootStack.Screen name="Components" component={ComponentsScreen} />
        <RootStack.Screen name="Counter" component={CounterScreen} />
        <RootStack.Screen name="Image" component={ImageScreen} />
        <RootStack.Screen name="List" component={ListScreen} />
        <RootStack.Screen name="Square" component={SquareScreen} />
        <RootStack.Screen name="Text" component={TextScreen} />
        <RootStack.Screen name="Box" component={BoxScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
