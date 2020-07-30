import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);

    return (
            <View style={styles.divImage}>
                <Image style={styles.image} source={props.imageSource} />
                <Text style={styles.text}>{props.title}</Text>
                <Text>{props.score}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
    },
    divImage: {
        marginTop: 15,
        backgroundColor: '#ccc'
    },
    text: {

    }
});

export default ImageDetail;