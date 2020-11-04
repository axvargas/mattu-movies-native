import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import { getMoviebyIdAPI } from '../api/movies'
import ModalVideo from '../components/ModalVideo'
import MovieImage from '../components/MovieImage'
import MovieRating from '../components/MovieRating'
import MovieTitle from '../components/MovieTitle'
import MovieTrailer from '../components/MovieTrailer'

const Movie = ({ route }) => {
    const { id } = route.params
    const [movie, setMovie] = useState(null)
    const [showVideo, setShowVideo] = useState(false)
    useEffect(() => {
        const getMovieById = async () => {
            const tmpMovie = await getMoviebyIdAPI(id)
            setMovie(tmpMovie)
        }
        getMovieById()
    }, [])
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                {movie &&
                    <>
                        <MovieImage posterPath={movie.poster_path} />
                        <MovieTrailer setShowVideo={setShowVideo} />
                        <MovieTitle movie={movie} />
                        <View style={styles.viewRating}>
                            <MovieRating voteCount={movie.vote_count} voteAverage={movie.vote_average} />
                        </View>
                        <Text style={styles.overview}>{movie.overview}</Text>
                        <Text style={[styles.overview, { marginBottom: 20 }]}>Release Date: {movie.release_date}</Text>
                    </>
                }
            </ScrollView>
            <ModalVideo show={showVideo} setShow={setShowVideo} movieId={id} />
        </>
    )
}

export default Movie

const styles = StyleSheet.create({
    viewRating: {
        marginHorizontal: 30,
        marginTop: 10,
        flexDirection: 'column',
    },
    overview: {
        marginHorizontal: 30,
        marginTop: 20,
        textAlign: 'justify',
        color: '#8697a5'
    }
})
