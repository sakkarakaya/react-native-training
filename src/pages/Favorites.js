import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import {useSelector} from 'react-redux'


const Favorites = () => {
    const myList = useSelector(state => state.favList) 
    return (
        <SafeAreaView>
            <FlatList 
                data={myList}
                renderItem={({item}) => <Text>{item.Name}</Text>}
                keyExtractor={(_, index) => index.toString()}
                ListEmptyComponent={() => <Text>fav list is empty</Text>}
                ItemSeparatorComponent={() => <View style={{ margin: 5, borderWidth: 1, borderColor: '#bdbdbd' }}></View>}
            />
        </SafeAreaView>
    )
}

export default Favorites
