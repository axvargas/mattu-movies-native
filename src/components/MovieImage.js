import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { BASE_IMG_PATH } from '../utils/constants'

const MovieImage = ({ posterPath }) => {
    const imgUrl = `${BASE_IMG_PATH}/w500${posterPath}`

    return (
        <View style={styles.viewPoster}>
            <Image
                style={styles.poster}
                source={{ uri: imgUrl }}
            />
        </View>
    )
}

export default MovieImage

const styles = StyleSheet.create({
    viewPoster: {
        shadowColor: '#000',
        shadowOffset: {
            width: 20,
            height: 20
        },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    poster: {
        width: '100%',
        height: 500,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
})
