import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { getNewMoviesAPI } from '../api/movies'
import { map } from 'lodash'
import MovieNew from '../components/MovieNew'
import usePreferences from '../hooks/usePreferences'

const News = () => {
    const [newMovies, setNewMovies] = useState(null)
    const [showBtnMore, setshowBtnMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const { theme } = usePreferences()

    useEffect(() => {
        const getNewMovies = async () => {
            setLoading(true)
            const response = await getNewMoviesAPI(page)
            const { results, total_pages } = response
            if (page < total_pages) {
                if (!newMovies)
                    setNewMovies(results)
                else
                    setNewMovies([...newMovies, ...results])
            } else {
                setshowBtnMore(false)
            }
            setLoading(false)
        }
        getNewMovies()
    }, [page])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: '1%' }}
        >
            <View style={styles.container}>
                {newMovies && map(newMovies, (movie, i) => (
                    <MovieNew key={movie.id + i} movie={movie} />
                ))}
            </View>
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

export default News

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    moreBtnContainer: {
        paddingTop: 10,
        paddingBottom: 30
    },
    moreBtn: {
        backgroundColor: 'transparent',
        textTransform: 'none'
    }
})
