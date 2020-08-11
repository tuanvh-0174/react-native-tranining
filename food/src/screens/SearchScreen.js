import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';


const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //  price == $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        })
    };


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

            <ResultList results={filterResultsByPrice('$')} title = "Title category 1" />
            <ResultList results={filterResultsByPrice('$$')} title = "Title category 2" />
            <ResultList results={filterResultsByPrice('$$')} title = "Title category 3" />

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