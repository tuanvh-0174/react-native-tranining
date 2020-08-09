import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';

const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50, // search?limit=50.
                    term: term,
                    location: 'san jose'
                }
            });

            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong');
        }
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
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