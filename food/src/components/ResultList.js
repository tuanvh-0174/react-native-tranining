import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import ResultDetail from '../components/ResultDetail';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

const ResultList = ({ title, results}) => {
    console.log('resultList-item');
    const navigation = useNavigation();
    console.log(navigation);
    return (
        <View>
            <Text style={styles.titleStyle}> {title}</Text>
            <Text style={styles.count}>(Results: {results.length})</Text>

            <FlatList
                horizontal // show item theo hang ngang (default = false: show doc)
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                            <TouchableOpacity
                                      onPress={() => navigation.navigate('Detail_product')}
                            >
                                <ResultDetail item={item} />
                            </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};
//                        <ResultDetail item={item} />


const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5
    },
    count: {
        marginLeft: 10
    },
});

export default ResultList;