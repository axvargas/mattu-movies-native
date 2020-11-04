import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Title, Text } from 'react-native-paper'
import { getAllGenresAPI, getMoviesByGenreAPI, getNewMoviesAPI } from '../api/movies'
import CarouselHorizontal from '../components/CarouselHorizontal'
import { map } from 'lodash'
import CarouselMulti from '../components/CarouselMulti'
import usePreferences from '../hooks/usePreferences'
const Home = () => {
    const [newMovies, setNewMovies] = useState(null)
    const [allGenres, setAllGenres] = useState(null)
    const [selectedGenre, setSelectedGenre] = useState(28)
    const [moviesByGenre, setMoviesByGenre] = useState(null)
    const { theme } = usePreferences()
    useEffect(() => {
        const getNewMovies = async () => {
            const response = await getNewMoviesAPI()
            setNewMovies(response.results)
        }
        getNewMovies()
    }, [])
    useEffect(() => {
        const getAllGenres = async () => {
            const tmpAllGenres = await getAllGenresAPI()
            setAllGenres(tmpAllGenres)
        }
        getAllGenres()
    }, [])
    useEffect(() => {
        const getMoviesByGenre = async () => {
            const tmpMoviesByGenre = await getMoviesByGenreAPI(selectedGenre)
            setMoviesByGenre(tmpMoviesByGenre)
        }
        getMoviesByGenre()
    }, [selectedGenre])
    const onChangeSelectedGenre = (genreId) => {
        setSelectedGenre(genreId)
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {newMovies &&
                <View style={styles.news}>
                    <Title style={styles.newsTitle}>New movies</Title>
                    <CarouselHorizontal data={newMovies} />
                </View>
            }
            <View style={styles.genres}>
                <Title style={styles.genresTitle}>Movies by genre</Title>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.genreScroll}
                >
                    {allGenres && map(allGenres, (genre) => (
                        <Text
                            key={genre.id}
                            style={[styles.genre, { color: genre.id !== selectedGenre ? '#8697a5' : theme === "dark" ? '#fff' : '#000' }]}
                            onPress={() => onChangeSelectedGenre(genre.id)}
                        >
                            {genre.name}
                        </Text>
                    ))}
                </ScrollView>
                {moviesByGenre &&
                    <CarouselMulti data={moviesByGenre} />
                }
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    news: {
        marginVertical: 10
    },
    newsTitle: {
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: '600',
        fontSize: 22
    },
    genres: {
        marginTop: 20,
        marginBottom: 50
    },
    genresTitle: {
        marginHorizontal: 20,
        fontWeight: '600',
        fontSize: 22
    },
    genreScroll: {
        marginTop: 5,
        marginBottom: 15,
        marginHorizontal: 20,
        padding: 10
    },
    genre: {
        marginRight: 16
    }
})
