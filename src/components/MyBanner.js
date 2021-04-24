import React from 'react';
import {View, Text} from 'react-native';

const MyBanner = ({item}) => {
    return(
        <View>
            <Text>{item.description}</Text>
        </View>
    )
}

export default MyBanner;