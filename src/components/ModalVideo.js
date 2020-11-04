import React, { useEffect, useState } from 'react'
import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Modal, IconButton, Title } from 'react-native-paper'
import WebView from 'react-native-webview';

import YouTube from 'react-native-youtube';
import { getMovieVideoAPI } from '../api/movies';

const ModalVideo = ({ show, setShow, movieId }) => {
    const [video, setVideo] = useState(null)
    useEffect(() => {
        const getMovieVideo = async () => {
            const tmpVideo = await getMovieVideoAPI(movieId)
            setVideo(tmpVideo)
        }
        getMovieVideo()
    }, [])
    return (
        <Modal visible={show} contentContainerStyle={styles.modal} transparent={true}>
            {video && Platform.OS === 'ios' ?
                <YouTube
                    videoId={video} // The YouTube video ID
                    play // control playback of video with true/false
                    fullscreen // control whether the video should play in fullscreen or inline
                    loop // control whether the video should loop when ended
                    style={styles.youtube}
                />
                :
                <WebView
                    allowsInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    style={{ marginTop: 20, width: Dimensions.get('window').width }}
                    source={{ uri: `https://www.youtube.com/embed/${video}?controls=0&showInfo=0` }}
                />

            }
            <IconButton
                icon="close"
                onPress={() => setShow(false)}
                style={styles.close}
                color='#fff'
            />
        </Modal>
    )
}

export default ModalVideo

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#000',
        height: '100%',
        alignItems: 'center',
        zIndex: 50
    },
    close: {
        backgroundColor: '#1ae1f2',
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        bottom: 100,
    },
    youtube: {
        alignSelf: 'stretch',
        height: 300
    }
})
