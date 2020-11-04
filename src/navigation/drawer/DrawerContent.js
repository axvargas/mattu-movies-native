import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper'
import usePreferences from '../../hooks/usePreferences'

const DrawerContent = ({ navigation }) => {
    const [active, setActive] = useState("Home")
    const { theme, toggleTheme } = usePreferences()
    const switchValue = theme === "dark"
    const onChangeScreen = (screen) => {
        setActive(screen)
        navigation.navigate(screen)
    }
    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    label="Home"
                    active={active === "Home"}
                    onPress={() => onChangeScreen('Home')}
                />
                <Drawer.Item
                    label="Popular movies"
                    active={active === "Popular"}
                    onPress={() => onChangeScreen('Popular')}
                />
                <Drawer.Item
                    label="New movies"
                    active={active === "News"}
                    onPress={() => onChangeScreen('News')}
                />
            </Drawer.Section>
            <Drawer.Section
                title="Options"
            >
                <TouchableRipple>
                    <View style={styles.preferences}>
                        <Text>Dark theme</Text>
                        <Switch
                            value={switchValue}
                            onValueChange={toggleTheme}
                        />
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})
