import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = (props) => {
    var route = props.route;
    var navigation = props.navigation;
    // set default
    const [result, setResult] = useState(null);

    console.log('ResultShowScreen');
    //console.log(result.photos);
    const id = route.params.id;

    const getResult = async (id) => {
        const  response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    // call api
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.name}>{ result.name }</Text>
           <FlatList
               data={result.photos}
               keyExtractor={(photo) => photo}
               renderItem={({ item }) => {
                   return <Image style={styles.image} source={{ uri: item }} />
               }}
               />
            <Text></Text>
            <Button
                    title="Go back"
                    onPress={() => navigation.goBack()}  />
        </View>
      );
};

const styles = StyleSheet.create({
    name: {
        alignItems:'center',
        fontSize: 20,
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 10,
    },
});

export default ResultShowScreen;