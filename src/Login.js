import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'

import auth from '@react-native-firebase/auth';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createAccount = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });


    }
    const signIn = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("signed in!!!")
            })
            .catch(error => console.log(error))
    }

    return (
        <SafeAreaView>
            <Text style={styles.text}>Login Page</Text>
            <TextInput
                style={styles.inputs}
                placeholder='E-Mail...'
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.inputs}
                placeholder='Password...'
                onChangeText={(text) => setPassword(text)}
            />
            <Button
                title="Create account"
                onPress={createAccount}
            />
            <Button
                title="Sign in"
                onPress={signIn}
            />
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    inputs: {
        backgroundColor: 'lightgray',
        margin: 5,
        padding: 8
    }
})