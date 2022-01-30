import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'

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
                />
                <TextInput
                style={styles.input}
                placeholder="Password"
                onBlur={Keyboard.dismiss}
                />
                <TouchableOpacity
                    style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        ); 
    
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