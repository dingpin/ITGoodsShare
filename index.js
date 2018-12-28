/** @format */

import {AppRegistry} from 'react-native';
import {createAppContainer, StackNavigator, createBottomTabNavigator} from 'react-navigation';
import Home from './screen/Home'
import {name as appName} from './app.json';
import AboutMe from './screen/AboutMe';
import DetailArticle from './screen/DetailArticle';
import BeautyScreen from './screen/BeautyScreen';

const myApp = StackNavigator({
    AboutMe: {screen: AboutMe},
    Home: {screen: Home},
    DetailArticle:{screen:DetailArticle},
    BeautyScreen:{screen:BeautyScreen}
} , {
    initialRouteName: 'Home',
})

AppRegistry.registerComponent(appName, () => myApp);
