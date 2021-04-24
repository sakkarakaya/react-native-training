import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Restaurants from './pages/Restaurants'
import Favorites from './pages/Favorites'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState, reducer } from './context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const store = createStore(reducer, initialState)

const ReduxRouter = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Restaurants" component={Restaurants} />
                    <Tab.Screen name="Favorites" component={Favorites} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default ReduxRouter
