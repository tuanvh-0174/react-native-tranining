import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ResultShowScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home screen</Text>

          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      );
};

const styles = StyleSheet.create({

});

export default ResultShowScreen;