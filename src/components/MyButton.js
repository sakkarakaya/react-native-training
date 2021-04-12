import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native';



const MyButton = (props) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={[styles.buttonContainer, 
                {backgroundColor: (props.color === undefined) ? 'orange' : props.color
                }]}
                onPress={props.alert}>
                
                <Text>{props.text}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'lightgreen',
        padding:10,
        margin:20,
        borderRadius: 10,
        alignItems: 'center'
    }
})

export default MyButton
