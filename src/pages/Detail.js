import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const Detail = (props) => {
    const detaildata = props.route.params.selected
    return (
        <SafeAreaView>
             <Text>
            {detaildata.desc}
       
           
        </Text>
        </SafeAreaView>
       
    )
}

export default Detail
