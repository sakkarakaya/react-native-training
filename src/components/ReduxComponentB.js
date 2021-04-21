import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const ReduxComponentB = () => {
    const myCounter = useSelector(s => s.counter)
    const myName = useSelector(s => s.name)
    return (
        <View style={{flex: 1, backgroundColor: 'lightgray'}}>
            <Text>ComponentB</Text>
            <Text>counter: {myCounter}</Text>
            <Text>name: {myName}</Text>
        </View>
    )
}

export default ReduxComponentB;