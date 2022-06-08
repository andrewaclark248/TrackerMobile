import React from 'react'
import { Text, StyleSheet } from 'react-native'
import AsyncStorage  from '@react-native-async-storage/async-storage';


const WelcomeScreen = () => {
    get_jwt_token();
    return (<Text>This is the components screen</Text>);


}


async function get_jwt_token(){
    const authDataString = await AsyncStorage.getItem("token");
    console.log("my jwt is below")
    console.log(authDataString)
}



export default WelcomeScreen;

