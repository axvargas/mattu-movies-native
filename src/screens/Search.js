import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View, Platform } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { searchMoviesAPI } from '../api/movies'
import { size, map } from 'lodash'
import usePreferences from '../hooks/usePreferences'
import MovieNew from '../components/MovieNew'
import { useNavigation } from '@react-navigation/native'
const Search = () => {
    const [movies, setMovies] = useState(null)
    const [search, setSearch] = useState("")
    const { theme } = usePreferences()
    const navigation = useNavigation()
    useEffect(() => {
        const searchMovies = async () => {
            const tmpMovies = await searchMoviesAPI(search)
            setMovies(tmpMovies)
        }
        if (size(search) > 2)
            searchMovies()
        if (size(search) < 2)
            setMovies(null)
    }, [search])
    const conSearchChange = (text) => {
        if (text.trim() === '') {
            setSearch('')
        } else {
            setSearch(text)
        }
    }
    return (
        <SafeAreaView>
            <Searchbar
                style={[styles.input, { backgroundColor: theme === 'dark' ? '#15212b' : '#fff' }]}
                placeholder="Search a movie..."
                icon="arrow-left"
                clearIcon="close"
                onChangeText={(text) => conSearchChange(text)}
                focusable
                onIconPress={() => navigation.goBack()}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: '1%', marginBottom: 20 }}>
                <View style={styles.container}>
                    {movies && map(movies, (movie, i) => (
                        <MovieNew key={movie.id + i} movie={movie} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    input: {
        marginTop: -3,
        zIndex: 1
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10
    }
})
