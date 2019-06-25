/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TodoListComponent from './App/components/TodoListComponent'; 

AppRegistry.registerComponent(appName, () => TodoListComponent);
