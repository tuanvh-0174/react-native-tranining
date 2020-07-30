// Path1
import React from 'react'
import {Text, StyleSheet, View } from 'react-native';

// Path2
const ComponentsScreen = () => {
    const greeting = 'This is lesson 2';
    const name = 'Tuan';

    return (
        <View>
            <Text style={ styles.textStyle }>Components screen </Text>
            <Text> { greeting } </Text>

            <Text style={ styles.gettingStyle }>Getting started with ReactNative</Text>
            <Text style={ styles.myNameStyle }>My name is { name }</Text>

        </View>
    );

};

// Path3

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "red"
    },
    gettingStyle: {
        fontSize: 20
    },

    myNameStyle: {
        fontSize:15
    },
});

// Path4

export default ComponentsScreen;