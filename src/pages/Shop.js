import React from 'react';
import {SafeAreaView, Alert, Text, View, StyleSheet} from 'react-native';
import MyButton from '../components/MyButton';
import InputPanel from '../components/InputPanel';


const Shop = () => {
    const getAlert = () => {
        Alert.alert("My Shop", "clicked")
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 30, textAlign: 'center'}}>My Shop</Text>
            </View>
            <MyButton text='Click Me' color='lightgreen' alert={getAlert}/>
            <MyButton text='Click Me!!!' color='lightblue'/>
            <MyButton text='Click Me!!!' />
            <InputPanel />
        
        </SafeAreaView>
    )
}



export default Shop
