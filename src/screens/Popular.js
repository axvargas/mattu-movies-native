import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { getPopularMoviesAPI } from '../api/movies'
import { map } from 'lodash'
import Movie from '../components/Movie'
import usePreferences from '../hooks/usePreferences'

const Popular = ({ navigation }) => {
    const [popularMovies, setPopularMovies] = useState(null)
    const [showBtnMore, setshowBtnMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const { theme } = usePreferences()

    useEffect(() => {
        const getPopularMovies = async () => {
            setLoading(true)
            const response = await getPopularMoviesAPI(page)
            const { results, total_pages } = response
            if (page < total_pages) {
                if (!popularMovies)
                    setPopularMovies(results)
                else
                    setPopularMovies([...popularMovies, ...results])
            } else {
                setshowBtnMore(false)
            }
            setLoading(false)
        }
        getPopularMovies()
    }, [page])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {popularMovies && map(popularMovies, (movie, i) => (
                <Movie key={movie.id + i} movie={movie} />
            ))}
            {showBtnMore &&
                <Button
                    contentStyle={styles.moreBtnContainer}
                    style={styles.moreBtn}
                    labelStyle={{ color: theme === "light" ? '#000' : '#1ae1f2' }}
                    onPress={() => setPage(page + 1)}
                    loading={loading}
                    disabled={loading}
                >
                    {!loading && 'Load more'}
                </Button>
            }
        </ScrollView>
    )
}

export default Popular

const styles = StyleSheet.create({
    moreBtnContainer: {
        paddingTop: 10,
        paddingBottom: 30
    },
    moreBtn: {
        backgroundColor: 'transparent',
        textTransform: 'none'
    }
})
