import React from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Text } from 'react-native-paper'
import { BASE_IMG_PATH } from '../utils/constants'
import { useNavigation } from '@react-navigation/native'

const MovieNew = ({ movie }) => {
    const { id, title, poster_path, } = movie

    const navigation = useNavigation()
    
    const onMoviePress = async () => {
        navigation.navigate('Movie', { id })
    }

    return (
        <TouchableWithoutFeedback
            onPress={onMoviePress}
        >
            <View style={styles.movie}>
                {poster_path ?
                    <Image
                        source={{ uri: `${BASE_IMG_PATH}/w500${poster_path}` }}
                        style={styles.poster}
                    />
                    :
                    <Text>{title}</Text>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MovieNew

const styles = StyleSheet.create({
    movie: {
        flexBasis: '49%',
        height: 280,
        marginTop: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    poster: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    }
})
