import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import React from 'react'
import PreferencesProvider from './src/context/preferences/PreferencesProvider'

const mattuMoviesApp = () => (
    <PreferencesProvider>
        <App />
    </PreferencesProvider>
)

AppRegistry.registerComponent(appName, () => mattuMoviesApp);
