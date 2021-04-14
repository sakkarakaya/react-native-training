// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Mainshop from './pages/Mainshop';
import Main from './pages/main'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={Main} />
        <Stack.Screen name="Shop" component={Mainshop} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;