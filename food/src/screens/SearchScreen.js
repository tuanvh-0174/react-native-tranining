import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SearchBar from './SearchBar';

const SearchScreen = (props) => {
    const [term, setTerm] = useState('');

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={ () => console.log('term as submitted')}
                 />

            <Text></Text>
            <Button
                title="Go to Home"
                onPress={() => props.navigation.navigate('Home')}
                />

                <Text>{term}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
});

export default SearchScreen;