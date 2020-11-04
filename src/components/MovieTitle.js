import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title, Text } from 'react-native-paper'
import { map } from 'lodash'

const MovieTitle = ({ movie }) => {
    const { title, genres } = movie
    return (
        <View style={styles.viewInfo}>
            <Title>{title}</Title>
            <View style={styles.genres}>
                <Text style={styles.genreTxt}>
                    {map(genres, (genre, i) => (
                        <Text key={genre.id} style={styles.genre}>{genre.name}{'       '}</Text>
                    ))}
                </Text>
            </View>
        </View>
    )
}

export default MovieTitle

const styles = StyleSheet.create({
    viewInfo: {
        marginHorizontal: 30
    },
    genres: {
        flexDirection: 'row'
    },
    genreTxt: {
        flexShrink: 1
    },
    genre: {
        marginRight: 20,
        color: '#8697a5',
    }
})
