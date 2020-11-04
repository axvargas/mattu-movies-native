import React from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Text } from 'react-native-paper'
import { BASE_IMG_PATH } from '../utils/constants'
import defaultImg from '../assets/default-img.png'
import MovieRating from './MovieRating'
import { useNavigation } from '@react-navigation/native'
const Movie = ({ movie }) => {
    const { id, title, poster_path, release_date, vote_count, vote_average } = movie
    const navigation = useNavigation()

    const onMoviePress = async () => {
        navigation.navigate('Movie', { id })
    }
    
    return (
        <TouchableWithoutFeedback
            onPress={onMoviePress}
        >
            <View style={styles.viewMovie}>
                <View>
                    <Image
                        style={styles.img}
                        source={poster_path ? { uri: `${BASE_IMG_PATH}/w500${poster_path}` } : defaultImg}
                    />
                </View>
                <View style={styles.info}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MovieRating voteCount={vote_count} voteAverage={vote_average} />
                    <Text style={styles.date}>{release_date}</Text>

                </View>
            </View >
        </TouchableWithoutFeedback>
    )
}

export default Movie

const styles = StyleSheet.create({
    viewMovie: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    info: {
        flexGrow: 1,
        marginLeft: 10,
        width: 0,
    },
    img: {
        width: 100,
        height: 150,
        borderRadius: 15
    },
    viewTitle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8
    },
    title: {
        flexGrow: 1
    },
    date: {
        color: '#8697a5',
        fontSize: 13,
        marginTop: 6
    }
})
