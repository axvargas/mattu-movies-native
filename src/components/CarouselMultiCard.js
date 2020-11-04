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

const CarouselMultiCard = ({ data }) => {
    const { id, title, poster_path, genre_ids } = data
    const imgUrl = `${BASE_IMG_PATH}/w500${poster_path}`

    const navigation = useNavigation();
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
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CarouselMultiCard

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        alignItems: 'center'
    },
    img: {
        width: '85%',
        height: 170,
        borderRadius: 20
    },
    viewTitle: {
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center'
    },
})
