import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';


// In App.js in a new project
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
                      title: 'My Search Screen',
                      headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                 }}
             />

        <Stack.Screen
            name="Home"
            component={Home}
             />

        <Stack.Screen
            name="Profile"
            component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;