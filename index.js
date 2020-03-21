import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Categories from './app/screens/Categories/index';
import AppStack from './app/Navigator';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => AppStack);
