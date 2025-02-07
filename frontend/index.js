import { AppRegistry } from 'react-native';
import App from './App'; // Your main App component
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client';

AppRegistry.registerComponent(appName, () => App);

const rootTag = document.getElementById('root') || document.createElement('div');
rootTag.id = 'root';
document.body.appendChild(rootTag);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag
});
