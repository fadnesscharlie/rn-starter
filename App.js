import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import Counterscreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
ColorScreen
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: Counterscreen,
    ColorScreen,
    SquareScreen,
    TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
