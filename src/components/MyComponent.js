import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, marginBottom: 5}}>Second Text</Text>
            <Text>Third Text</Text>
            <View>
                <Text>Fourth Text</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: '#e0e0e0',
        borderRadius: 10
    }
})

export default MyComponent;