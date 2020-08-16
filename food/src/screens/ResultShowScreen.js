import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = (props) => {
    var route = props.route;
    var navigation = props.navigation;
    // set default
    const [result, setResult] = useState(null);
    const [review, setReview] = useState(null);

    console.log('ResultShowScreen');
    //console.log(result.photos);
    console.log(review);

    const id = route.params.id;

    // get API detail
    const getResult = async (id) => {
        const  response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    // get API reviews
    const getReview = async (id) => {
        const res = await yelp.get(`/${id}/reviews`);
        console.log(res);
        setReview(res.data.reviews);
    };

    // call api
    useEffect(() => {
        getResult(id);
        getReview(id);
    }, []);

    if (!result) {
        return null;
    }



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.name}>{ result.name }</Text>
           <FlatList
               data={result.photos}
               keyExtractor={(photo) => photo}
               renderItem={({ item }) => {
                   return <Image style={styles.image} source={{ uri: item }} />
               }}
               />
            <Text></Text>
            <Text style={styles.review}>Reviews</Text>

            <FlatList
               data={review}
               keyExtractor={(review) => review.id}
               renderItem={({ item }) => {
                   return <Text>{ item.text }</Text>
               }}
               />
              <Text></Text>
              <Text></Text>
            <Button
                    title="Go back"
                    onPress={() => navigation.goBack()}  />
        </ScrollView>
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
    scrollView: {
        marginHorizontal: 30,
    },
    review: {
        fontWeight: 'bold',
    },
});

export default ResultShowScreen;