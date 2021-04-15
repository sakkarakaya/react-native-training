import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, ActivityIndicator } from 'react-native';

import MyCard from '../components/MyCard';

const AxiosPractice = () => {
    useEffect(() => {
       return getData()
    }, [])

    const [datalist, setDatalist] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const myData = await axios.get('https://random-data-api.com/api/crypto_coin/random_crypto_coin')
        setLoading(false);
        setDatalist(myData.data);
        
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>
                {loading ?
                    <ActivityIndicator /> :
                    <MyCard data={datalist}/>
                }
                
                
                <Button title='suggest new one' onPress={getData}/>
            </View>

        </SafeAreaView>
    )
}

export default AxiosPractice
