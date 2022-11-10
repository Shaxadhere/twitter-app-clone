import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/constants/colors'
import spacing from "../config/constants/spacing"
import Header from '../components/UI/Header'
import TweetCard from '../components/UI/TweetCard'



const HomeScreen = () => {
    return (
        <View>
            <Header />
            <ScrollView>
                {new Array(9).fill(0).map((item, index) =>
                    <TweetCard key={index} />
                )}
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})