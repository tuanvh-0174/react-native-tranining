import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (navigation) => {
 console.log(navigation)

  return (
    <View>
        <Text style = {styles.text }>Home Screen</Text>
        <Button
            title = "Go to components screen"
            onPress = { () => navigation.navigate('ComponentsScreen')}
            ></Button>

            <Button
              title="Go to List screen"
              color="#841584"
              onPress = { () => navigation.navigate('ListScreen') }
            />

            <TouchableOpacity  onPress = { () => navigation.navigate('ListScreen') }>
                <Text>Go to List Demo (TouchableOpacity)</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;
