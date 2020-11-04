import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Rating } from 'react-native-ratings'
import { Text } from 'react-native-paper'
import starDark from '../assets/starDark.png'
import starLight from '../assets/starLight.png'
import usePreferences from '../hooks/usePreferences'

const MovieRating = ({ voteCount, voteAverage }) => {
    const { theme } = usePreferences()
    const media = Number((voteAverage / 2).toFixed(1))
    return (
        <>
            <View style={styles.viewRating}>
                <Rating
                    type="custom"
                    ratingImage={theme === 'dark' ? starDark : starLight}
                    ratingColor='#ffc205'
                    ratingBackgroundColor={theme === 'dark' ? '#192734' : '#f0f0f0'}
                    startingValue={media}
                    imageSize={20}
                    readonly={true}
                />
                <Text style={styles.txtMedia}>{media}</Text>
            </View>
            <Text style={styles.txtVotes}>{`${voteCount} votes`}</Text>
        </>
    )
}

export default MovieRating

const styles = StyleSheet.create({
    viewRating: {
        flexDirection: 'row'
    },
    txtMedia: {
        fontSize: 14,
        marginLeft: 15,
        fontWeight: '600'
    },
    txtVotes: {
        fontSize: 12,
        color: '#8697a5'
    }
})
