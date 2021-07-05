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
        />

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

        <Button
            title="Go to Counter screen (1)"
            onPress = { () => props.navigation.navigate('CounterScreen') }
         />

         <Button
             title="Go to Counter Reducer screen (2)"
             onPress = { () => props.navigation.navigate('CounterReducerScreen') }
           />

        <Button
            title="Go to Color screen"
            color="pink"
            onPress = { () => props.navigation.navigate('ColorScreen') }
         />

        <Button
            title="Go to Square  screen (1)"
            color="green"
            onPress = { () => props.navigation.navigate('SquareScreen') }
          />

        <Button
            title="Go to SquareReducer screen (2)"
            color="green"
            onPress = { () => props.navigation.navigate('SquareReducerScreen') }
          />

        <Button
            title="Go to Text Screen "
            color=""
            onPress = { () => props.navigation.navigate('TextScreen') }
          />

        <Button
            title="Go to Box Screen "
            color="red"
            onPress = { () => props.navigation.navigate('BoxScreen') }
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
