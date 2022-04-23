import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import getEnvVars from './../../environment';
const { apiUrl, loginURL } = getEnvVars();
import axios from 'axios';
import AsyncStorage  from '@react-native-async-storage/async-storage';



const LoginScreen = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
            <View>
                <Text style={styles.textLabel}>
                    Please Login
                </Text>
                <Text>
                    This is my api url = {apiUrl}
                </Text>
                <TextInput
                style={styles.input}
                placeholder="Username"
                onBlur={Keyboard.dismiss}
                onChangeText={(event) => {
                    setUserName(event)
                }}
                />
                <TextInput
                style={styles.input}
                placeholder="Password"
                onBlur={Keyboard.dismiss}
                onChangeText={(event) => {
                    setPassword(event)
                }}
                />
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        handleLoginSubmit(userName, password, navigation);
                        } }>
                    <Text style={styles.saveButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        ); 
    
}

function handleLoginSubmit(userName, password, navigation) {//(userName, password) {
    //var result = await axios.post(loginURL,{userName: userName, password: password}).then(function (response) { console.log(response) }).catch(()=> {console.log("some log error")})
    var result =  axios
      .post(loginURL, {
        userName: userName,
        password: password
      })
      .then((response) => {
        loginResult(response, navigation);
      });
}


async function loginResult(response, navigation)
{
    if (response.data["success"])
    {
        await AsyncStorage.setItem("token", "myjwttokenisfinallystored").catch(error => console.log("async error: "+error));
        navigation.navigate('Welcome')
    }
    else {
        console.log("login failed")
    }
}



_storeData = async (response) => {
    console.log(response);
    try {
      await AsyncStorage.setItem(
        'token',
        'I like to save it.'
      );
    } catch (error) {
      // Error saving data
    }
  };


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    textLabel: {
        textAlign: 'center',
        paddingTop: 50
    },
    saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
      },
      saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
      }
  });


export default LoginScreen;