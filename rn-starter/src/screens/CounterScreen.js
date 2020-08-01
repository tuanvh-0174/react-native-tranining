import React, {useState} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CounterScreen = () => {
//    let counter = 0;
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
//                  counter++;
                    setCounter(counter + 1);
                    console.log(counter);
            }}/>
            <Text></Text>
            <Button
                title="Decrease"
                onPress={() => {
//                  counter--;
                    setCounter(counter -1);
                    console.log(counter);
            }}/>


            <Text> Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CounterScreen;