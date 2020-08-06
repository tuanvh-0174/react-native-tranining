import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        /*<View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}> Box Screen #1</Text>
            <Text style={styles.textTwoStyle}> Box Screen #2</Text>
            <Text style={styles.textThreeStyle}> Box Screen #3</Text>
        </View>*/

        <View style={styles.viewStyle}>
            <View style={styles.view4Style} />
            <View style={styles.view5Style} />
            <View style={styles.view6Style} />
        </View>

    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
//        alignItems: 'flex-start',
//        alignItems: 'center',
//        alignItems: 'flex-end',
//        flexDirection: 'column' // default
//        flexDirection: 'row',
        height: 200,
//        alignItems: 'center',
//        justifyContent: 'space-around',
//        justifyContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
//        marginVertical: 20,
//        marginHorizontal: 20,
//        margin:20,
//        alignSelf: 'flex-start',
//        alignSelf: 'center',
////        alignSelf: 'flex-end',

    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
//        position: 'absolute',
//        top: 50,
        fontSize: 20,
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
    },

    view4Style: {
        height:50,
        width: 50,
        backgroundColor: 'red',
    },
    view5Style: {
        height:50,
        width: 50,
        backgroundColor: 'green',
//        marginTop: 50,
        alignSelf: 'flex-end'
    },
    view6Style: {
        height:50,
        width: 50,
        backgroundColor: 'blue',
    },
});

export default BoxScreen;