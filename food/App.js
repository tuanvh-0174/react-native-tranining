import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';
import Home from './src/screens/HomeScreen';
import BlogScreen from './src/screens/BlogScreen';

// In App.js in a new project
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
            name="Home"
            component={Home}
            options={{
                title: 'My App',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
            }}
        />

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
            name="Profile"
            component={Profile} />

        <Stack.Screen
             name="Detail_product"
             component={ResultShowScreen}
             options={{
                   title: 'Detail',
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
            name="Blog"
            component={BlogScreen}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;