import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from '../components/ResultDetail';

const ResultList = ({ title, results }) => {
    console.log('resultList-item');
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
                    return <ResultDetail item={item} />;
                }}
            />
        </View>
    );
};

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