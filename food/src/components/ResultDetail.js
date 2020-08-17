import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultDetail = ({ item }) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image_url }} />
        <Text style={styles.name} >{ item.name }</Text>
        <Text>{ item.rating } Starts, {item.review_count} Reviews </Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,

    },
    image: {
        width: 200,
        height: 100,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default ResultDetail;