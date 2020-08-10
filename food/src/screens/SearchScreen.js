import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useState();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                 />

            <Text>{term}</Text>
            { errorMessage ? <Text>{errorMessage}</Text> : null }
            <Text>We have found {results.length} results</Text>

            <Button
                title="Go to Home"
                onPress={() => props.navigation.navigate('Home')}
                />


        </View>
    );

};

const styles = StyleSheet.create({
});

export default SearchScreen;