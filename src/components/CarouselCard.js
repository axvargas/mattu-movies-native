import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Text, Title } from 'react-native-paper'
import { getMovieGenresAPI } from '../api/movies'
import { BASE_IMG_PATH } from '../utils/constants'

const CarouselCard = ({ data }) => {
    const { id, title, poster_path, genre_ids } = data
    const [movieGenres, setMovieGenres] = useState([])
    const navigation = useNavigation();

    const imgUrl = `${BASE_IMG_PATH}/w500${poster_path}`

    useEffect(() => {
        const getMovieGenres = async () => {
            const tmpMovieGenres = await getMovieGenresAPI(genre_ids)
            setMovieGenres(tmpMovieGenres)
        }
        getMovieGenres()
    }, [])

    const onMoviePress = () => {
        navigation.navigate('Movie', { id })
    }
    return (
        <TouchableWithoutFeedback
            onPress={onMoviePress}
        >
            <View style={styles.card}>
                <Image
                    style={styles.img}
                    source={{ uri: imgUrl }}
                />
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {movieGenres &&
                    <View style={styles.genres}>
                        <Text style={styles.genre}>
                            {movieGenres.join(', ')}
                        </Text>
                    </View>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CarouselCard

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    img: {
        width: '100%',
        height: 450,
        borderRadius: 40
    },
    viewTitle: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    genres: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    genre: {
        fontSize: 12,
        color: '#8997a5'
    }
})
