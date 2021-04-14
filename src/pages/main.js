import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import MyBanner from '../components/MyBanner';
import MyItem from '../components/MyItem';

const Main = (props) => {
    const myItems = [
        {
            id: 1,
            title: 'Title1',
            desc: 'Description1',
            color: '#f06292',
            isActive: true
        },
        {
            id: 2,
            title: 'Title2',
            desc: 'Description2',
            color: '#ab47bc',
            isActive: false
        },
        {
            id: 3,
            title: 'Title3',
            desc: 'Description3',
            color: '#26a69a',
            isActive: true
        }
    ]
    return (
        <SafeAreaView>
            <View style={styles.container}>

                {myItems.map(item => {
                    return <MyItem data={item} />
                })}
                <Button
                    title="Go to Shop Page"
                    onPress={() => props.navigation.navigate('Shop')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    text: {

    }
})

export default Main;