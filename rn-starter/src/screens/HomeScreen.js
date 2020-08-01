import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
 console.log(props.navigation)

  return (
    <View>
        <Text style = {styles.text }>Home Screen</Text>
        <Button
            title = "Go to components screen"
            onPress = { () => props.navigation.navigate('ComponentsScreen')}
            ></Button>

            <Button
              title="Go to List screen"
              color="#841584"
              onPress = { () => props.navigation.navigate('ListScreen') }
            />

            <Button
              title="Go to Image screen"
              color="green"
              onPress = { () => props.navigation.navigate('ImageScreen') }
            />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;
