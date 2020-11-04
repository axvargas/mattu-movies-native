import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { IconButton } from 'react-native-paper'
import Home from '../../screens/Home';
import Movie from '../../screens/Movie';
import News from '../../screens/News';
import Popular from '../../screens/Popular';
import Search from '../../screens/Search';

const Stack = createStackNavigator();

const StackNavigation = ({ navigation }) => {

    const buttonLeft = (screen) => {
        switch (screen) {
            case "Movie":
            case "Search":
                return (
                    <IconButton
                        icon="arrow-left"
                        onPress={() => navigation.goBack()}
                    />
                )
            default:
                return (
                    <IconButton
                        icon="menu"
                        onPress={() => navigation.openDrawer()}
                    />
                )
        }

    }

    const buttonRight = () => (
        <IconButton
            icon="magnify"
            onPress={() => navigation.navigate('Search')}
        />
    )

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Mattu movies',
                    headerLeft: () => buttonLeft("Home"),
                    headerRight: () => buttonRight()
                }}
            />
            <Stack.Screen
                name="Movie"
                component={Movie}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => buttonLeft("Movie"),
                    headerRight: () => buttonRight()
                }}
            />
            <Stack.Screen
                name="News"
                component={News}
                options={{
                    title: 'New movies',
                    headerLeft: () => buttonLeft("News"),
                    headerRight: () => buttonRight()
                }}
            />
            <Stack.Screen
                name="Popular"
                component={Popular}
                options={{
                    title: 'Popular movies',
                    headerLeft: () => buttonLeft("Popular"),
                    headerRight: () => buttonRight()
                }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => buttonLeft("Search")
                }}
            />
        </Stack.Navigator >
    )
}

export default StackNavigation
