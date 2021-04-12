/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
// import State from './src/State';
// import Shop from './src/Shop';
import Mainshop from './src/Mainshop'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Mainshop);
