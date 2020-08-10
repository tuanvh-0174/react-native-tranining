import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';


const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useState();
    // code here, 4.show search result
    //console.log(results);

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

            <ResultList title = "Title1" />
            <ResultList title = "Title2" />
            <ResultList title = "Title2" />

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