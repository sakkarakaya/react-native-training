import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';



const MyCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>{props.data.coin_name} (
                    <Text>{props.data.acronym}</Text>
                )</Text>
            </View>
            <Image 
                style={styles.image}
                source={{uri : props.data.logo}}
            />
        </View>
    )
}

export default MyCard

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'lightpink'
    },
    headertext:{
        fontSize: 18,
        color: 'brown',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image:{
        height: Dimensions.get('window').height * 0.3,
        resizeMode: 'contain'
    }
})