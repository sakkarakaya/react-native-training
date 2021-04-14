/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import MyComponent from '../components/MyComponent';


const App = () => {
  const myName = "Mehmet";
  function myFunction(){
    return (<Text style={styles.welcome}>It's my function...</Text>)
  }
  function myFunction2(){
    const myArray = ["a", "b", "c", "d"];
    
    return (myArray.map(c => <Text>{c}</Text>))
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>First Text</Text>
      </View>
      <MyComponent/>
      {/* <Text style={styles.welcome}>Welcome {myName}! 🔥</Text> */}
      {/* {myFunction()}
      {myFunction2()} */}


      <View>
        <Text>Hi!</Text>
        <TextInput style={styles.myInput} placeholder="Search...."/>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    margin: 10,
    padding: 5,
    borderRadius: 10
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: 25,
    margin: 10
  },
  myInput:{
    backgroundColor: 'gray',
    color: 'white',
    margin: 10,
    padding:5
    
  }
});

export default App;
