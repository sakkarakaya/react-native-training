import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imgUrl }}
                style={styles.image}
            />
            <View style={{flex: 1, justifyContent:'space-between'}}>
                <Text>{product.name}</Text>
                <Text style={{fontWeight:'bold'}}>{product.price}€</Text>
                {product.inStock ? null : <Text style={{color:'red'}}>Out of Stock</Text>}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        margin: 5,
        padding: 10,
        borderRadius: 10
    },
    image: {
        height: Dimensions.get('window').height * 0.3,
        resizeMode: 'contain'

    }
})

export default ProductCard
