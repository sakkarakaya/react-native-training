import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Restaurants from './pages/Restaurants'
import Favorites from './pages/Favorites'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ReduxRouter = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Restaurants" component={Restaurants} />
                <Tab.Screen name="Favorites" component={Favorites} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default ReduxRouter
