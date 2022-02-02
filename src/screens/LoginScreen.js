import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'

const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');

const LoginScreen = () => {


    return (
            <View>
                <Text style={styles.textLabel}>
                    Please Login
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
                        handleLoginSubmit()
                    } }>
                    <Text style={styles.saveButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        ); 
    
}

function handleLoginSubmit() {
    console.log("my something function");
    console.log("username" + userName);
    console.log("password" + password);
}



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