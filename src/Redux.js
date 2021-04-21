import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { reducer, initialState } from './context'

import ComponentA from './components/ReduxComponentA'
import ComponentB from './components/ReduxComponentB'

const store = createStore(reducer, initialState)

const Redux = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <ComponentA />
                <ComponentB />
            </SafeAreaView>
        </Provider>

    )
}

export default Redux
