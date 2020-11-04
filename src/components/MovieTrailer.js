import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import usePreferences from '../hooks/usePreferences'

const MovieTrailer = ({ setShowVideo }) => {
    const { theme } = usePreferences()
    return (
        <View style={styles.viewPlay}>
            <IconButton
                icon="play"
                color='#fff'
                size={30}
                style={styles.play}
                onPress={() => setShowVideo(true)}
            />
        </View>
    )
}

export default MovieTrailer

const styles = StyleSheet.create({
    viewPlay: {
        justifyContent: "flex-end",
        alignItems: 'flex-end'
    },
    play: {
        backgroundColor: '#1ae1f2',
        marginTop: -31,
        marginRight: 30,
        width: 60,
        height: 60,
        borderRadius: 100,
        elevation: 4
    }
})
