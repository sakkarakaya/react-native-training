import React, {useState} from 'react';
import { Text, Button, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const State = () => {
    const [counter, setCounter] = useState(0);
    const updateCounter = () => setCounter(counter+1)
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{counter}</Text>
            <Button 
                title="up"
                onPress={updateCounter}
            />
            <Button 
                title="down"
                onPress={()=>setCounter(counter-1)}
            />
            <Button 
                title="reset"
                onPress={()=>setCounter(counter*0)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text:{
        fontSize: 80,
        
    }
})

export default State
