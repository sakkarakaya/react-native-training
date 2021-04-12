import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const MyItem = (props) => {
    return (
        <SafeAreaView>
            <View style={[styles.container, {backgroundColor: props.data.color }]}>
                <View style={{flex: 1}}>

                    <Text style={[styles.text,{ fontSize: 25 }]}>{props.data.title}</Text>

                    <Text style={styles.text}>{props.data.desc}</Text>

                </View>

                {!props.data.isActive && <Text style={styles.text}>Inaktive</Text>}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})

export default MyItem
