/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

// import App from './src/pages/App';
// import State from './src/pages/State';
// import Shop from './src/pages/Shop';
// import Mainshop from './src/pages/Mainshop'
// import Router from './src/Router'

// import Redux from './src/Redux'
// import ReduxRouter from './src/ReduxRouter'

import Login from './src/Login'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
