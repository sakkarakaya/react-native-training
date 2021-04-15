import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, FlatList, Button } from 'react-native';




const Axios = () => {

    const [fetch, setFetch] = useState([]);

    const fetchDataThen = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setFetch(res.data))
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setFetch(res.data))
    }, [])

    const fetchDataAsync = async () => {
        const data2 = await axios.get('https://jsonplaceholder.typicode.com/users');
        setFetch(data2.data)
    }

    return (
        <SafeAreaView>
            <FlatList 
                data={fetch}
                renderItem={({item}) => <Text>{item.name}</Text>}
            />
            <Button title='fetch...' onPress={fetchDataThen}/>
            <Button title='fetch...2' onPress={fetchDataAsync}/>
        </SafeAreaView>
    )
}

export default Axios
