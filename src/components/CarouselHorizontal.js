import React from 'react'
import {
    StyleSheet,
    Dimensions,
} from 'react-native'
import { Text } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel'
import CarouselCard from './CarouselCard'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = Math.round(width * 0.7)

const CarouselHorizontal = ({ data }) => {
    return (
        <Carousel
            layout={"default"}
            data={data}
            renderItem={({item}) => <CarouselCard data={item} />}
            sliderWidth={width}
            itemWidth={ITEM_WIDTH}
        />
    )
}

export default CarouselHorizontal