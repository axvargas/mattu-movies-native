import React, { useContext } from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import {
	Provider as PaperProvider,
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperDefaultTheme
} from 'react-native-paper'
import {
	NavigationContainer,
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native'
import Navigation from './src/navigation/Navigation'
import usePreferences from './src/hooks/usePreferences'
import NavigationBar from 'react-native-navbar-color'

const App = () => {
	const { theme } = usePreferences()

	PaperDefaultTheme.colors.primary = '#1ae1f2'
	PaperDarkTheme.colors.primary = '#1ae1f2'
	PaperDarkTheme.colors.accent = '#1ae1f2'

	NavigationDarkTheme.colors.background = '#192734'
	NavigationDarkTheme.colors.card = '#15212b'

	const paperTheme = theme === "dark" ? PaperDarkTheme : PaperDefaultTheme
	const navigationTheme = theme === "dark" ? NavigationDarkTheme : NavigationDefaultTheme
	const barStyle = theme === "dark" ? 'light-content' : 'dark-content'
	const StatusBarbgColor = theme === "dark" ? NavigationDarkTheme.colors.card : NavigationDefaultTheme.colors.card
	
	if(theme === "dark"){
		NavigationBar.setColor('#15212b')
	}else{
		NavigationBar.setColor('#ffffff')
	}

	return (
		<PaperProvider theme={paperTheme}>
			<NavigationContainer theme={navigationTheme}>
				<StatusBar barStyle={barStyle} backgroundColor={StatusBarbgColor} />
				<Navigation />
			</NavigationContainer>
		</PaperProvider>
	);
};

const styles = StyleSheet.create({

});

export default App;
