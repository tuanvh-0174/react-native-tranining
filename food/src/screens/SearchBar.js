import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
//import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
              <Feather
                name="search"
                size={30}
                color="black"
                style={styles.iconStyle}
                />

              <TextInput style={styles.inputStyle}
                  placeholder="search"
                  value={term}
                  autoCapitalize="none"
                  autoCorrect={false}
//                  onChangeText={newTerm => onTermChange(newTerm)}
//                  onEndEditing={() => {
//                        console.log('Submitted');
//                        onTermSubmit();
//                    }
//                  }
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                 />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ccc',
        height: 50,
        borderRadius:5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
    },
    inputStyle: {
//        borderColor: 'black',
//        borderWidth: 1,
        flex:1, //width 100%
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});

export default SearchBar;