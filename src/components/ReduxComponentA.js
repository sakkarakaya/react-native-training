import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

const ReduxComponentA = () => {
    const myCounter = useSelector(s => s.counter);
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>
            <Text>ComponentA</Text>
            <Text>Counter: {myCounter}</Text>
            <Button
                title='up'
                onPress={() => dispatch({ type: "increase" })}
            />
            <Button
                title='reset'
                onPress={() => dispatch({ type: "reset" })}
            />
            <Button
                title='change name'
                onPress={() => dispatch({
                    type: "change",
                    payload: {
                        username: 'changed'
                    }
                })}
            />
        </View>
    )
}

export default ReduxComponentA;