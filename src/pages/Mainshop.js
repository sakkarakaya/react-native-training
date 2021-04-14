import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, Alert, TextInput } from 'react-native';
import productList from '../productsData.json';
import ProductCard from '../components/ProductCard'

const Mainshop = () => {
    useEffect(() => {
        // Alert.alert("My Shop", "Welcome")
        setDisplayList(productList);
    }, [])

    const [inputValue, setInputValue] = useState("");
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {
       
       const filteredValue = productList.filter((item) => {
           const searchedText = inputValue.toUpperCase();
           const myTitles = item.name.toUpperCase();
           return myTitles.indexOf(searchedText) > -1
       })
       setDisplayList(filteredValue)
    }, [inputValue])

    const renderData = ({ item }) => (
            <ProductCard 
            product={item} />
          ); 
    return (
        
        <SafeAreaView style={{flex: 1}}>
            <Text style={styles.banner}>My Shop</Text>
            <TextInput 
                style={styles.textinput}
                placeholder="Search product..."
                onChangeText={(value) => setInputValue(value)}
                />
            <FlatList 
                data={displayList}
                renderItem={renderData}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    banner:{
        fontSize:30,
        color: '#ef9a9a',
        alignSelf: 'center'
    },
    textinput:{
        backgroundColor: '#efeff1',
        margin: 10,
        padding: 10,
        borderRadius: 5
    }
})

export default Mainshop
