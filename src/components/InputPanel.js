import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const InputPanel = () => {

    const [inputText, setInputText] = useState("")

    return (
        <View>
            <View>
                 <TextInput
                placeholder='Search...'
                style={styles.input}
                onChangeText={value => {setInputText(value)}}
            />
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => alert(inputText)}
            >
                <Text style={{textAlign: 'center', color: 'white'}}>
                    Search
                </Text>
            </TouchableOpacity>
           
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{

    },
    input:{
        backgroundColor: '#efefe1',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        
    },
    button:{
        backgroundColor: 'green',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.5,
        alignSelf: 'center',
      
    }
})

export default InputPanel
