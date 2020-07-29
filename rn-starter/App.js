import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentsScreen: ComponentsScreen,

  },
  {
    initialRouteName: "ComponentsScreen",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
