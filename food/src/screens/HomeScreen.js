import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ backgroundColor: '#38A5CF', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

          <Image style={{  flex: 1, height: 200}} source={ require('../../assets/react-native.png') } />
        </View>

        <View style={{ backgroundColor: 'lightblue', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text onPress={() => this.props.navigation.navigate('Profile')} style={{ backgroundColor: 'red', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 1</Text>
            <Text onPress={() =>  this.props.navigation.navigate('Search')} style={{ backgroundColor: 'pink', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> YELP</Text>
            <Text style={{ backgroundColor: 'green', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}>ICON 3 </Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ backgroundColor: 'yellow', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 4 </Text>
            <Text style={{ backgroundColor: 'lightblue', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 5 </Text>
            <Text style={{ backgroundColor: 'lightgreen', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 6 </Text>
          </View>

        </View>

      </View>

    );
  }
}
/*
const HomeScreen => (props) => {
    return (
          <View style={styles.container}>

            <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text> PLACE HOLDER FOR IMAGE</Text>
            </View>

            <View style={{ backgroundColor: 'lightblue', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>

              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ backgroundColor: 'red', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 1</Text>
                <Text style={{ backgroundColor: 'pink', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 2</Text>
                <Text style={{ backgroundColor: 'green', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}>ICON 3 </Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ backgroundColor: 'yellow', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 4 </Text>
                <Text style={{ backgroundColor: 'lightblue', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 5 </Text>
                <Text style={{ backgroundColor: 'lightgreen', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 6 </Text>
              </View>

            </View>

          </View>

        );
};
export default HomeScreen;
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },

});

