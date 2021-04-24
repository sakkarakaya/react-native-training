import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import Card from '../components/MyBanner'
import Clinics from '../main.json'
import { useDispatch } from 'react-redux'

const Restaurants = () => {
    const dispatch = useDispatch()

    // const [list, setList] = useState([]);

    // const fetchData = () => {
    //     axios.post(
    //         'https://worldwide-restaurants.p.rapidapi.com/typeahead',
    //         {
    //             q: 'band',
    //             language: 'en_US'
    //         },
    //         {
    //         headers:{
    //             'content-type': 'application/json',
    //             'x-rapidapi-key': '3f88fe84f8msh8114e2eb87d24afp197c91jsn33feed70db94',
    //             'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com'
    //         }

    //         }
    //     ).then(res => console.log(res.data.results.data))
    //     .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //    fetchData()
    // }, [])



    const renderItem = ({ item }) => <TouchableOpacity
        onPress={() => dispatch(
            {
                type: 'add-fav',
                payload: { clicked: item }
            }
        )}
    >
        <Text>{item.Name}</Text>
    </TouchableOpacity>

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>RESTAURANTS</Text>
            <FlatList
                data={Clinics}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ margin: 5, borderWidth: 1, borderColor: '#bdbdbd' }}></View>}
            />
        </SafeAreaView>
    )
}

export default Restaurants
