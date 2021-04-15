// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Mainshop from './pages/Mainshop';
import Main from './pages/main';
import Detail from './pages/Detail';
import Axios from './pages/Axios';
import AxiosPractice from './pages/AxiosPractice';

function Maincom(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="List" component={Main}/>
      <Stack.Screen name="Detail" component={Detail}/>
      <Stack.Screen name="Axios" component={Axios}/>
      <Stack.Screen name="AxiosPractice" component={AxiosPractice}/>
    </Stack.Navigator>
  )
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Listcom" component={Maincom} />
        <Tab.Screen name="Shop" component={Mainshop} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;