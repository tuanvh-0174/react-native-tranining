import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';


const SearchScreen = (props) => {
console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage, loading] = useResults();

    const filterResultsByPrice = (price) => {
        //  price == $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        // flex: set scroll for android
        <View style={{ flex: 1}}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => {
                        searchApi(term);
                    }
                }
             />


            { loading
                ? <Text style={{ paddingLeft: 15, color: 'green' }}>Please wait...</Text>
                : <Text style={{ paddingLeft: 15 }}>We have found {results.length} results</Text> }

            { errorMessage ? <Text>{errorMessage}</Text> : null }

            <ScrollView>
                <ResultList results={filterResultsByPrice('$')} title = "Title category 1" />
                <ResultList results={filterResultsByPrice('$$')} title = "Title category 2" />
                <ResultList results={filterResultsByPrice('$$')} title = "Title category 3" />
            </ScrollView>

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