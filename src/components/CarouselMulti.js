import React from 'react'
import {
    StyleSheet,
    Dimensions,
} from 'react-native'
import { Text } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel'
import CarouselMultiCard from './CarouselMultiCard'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = Math.round(width * 0.3)

const CarouselMulti = ({ data }) => {
    return (
        <Carousel
            layout={"default"}
            data={data}
            renderItem={({ item }) => <CarouselMultiCard data={item} />}
            sliderWidth={width}
            itemWidth={ITEM_WIDTH}
            firstItem={1}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            enableSnap={false}
        />
    )
}

export default CarouselMulti

const styles = StyleSheet.create({})
