import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../config/constants/colors'
import spacing from "../config/constants/spacing"
import Header from '../components/UI/Header'
import TweetCard from '../components/UI/TweetCard'



const HomeScreen = () => {

    const [tweets, setTweets] = useState([
        {
            image: "https://pbs.twimg.com/profile_images/1546415342901239810/U8EaywSS_400x400.jpg",
            name: "Niche Memepage Celebrity",
            username: "TheMemestry",
            date: "2022-11-09T12:55:12",
            content: "Everything seems meaningless when you've watched all the good TV shows",
        },
        {
            image: "https://pbs.twimg.com/profile_images/1590740784906739715/n1Ht1E7C_400x400.jpg",
            name: "Lily.",
            username: "mnvzza",
            date: "2022-11-11T12:10:12",
            content: "instead of trolling or criticizing india we should appreciate them for the effort, they've come a long way since the last time. from 150-0 to 170-0, massive improvement imo",
        },
        {
            image: "https://pbs.twimg.com/profile_images/1590748550857646083/2aVOqPyA_400x400.jpg",
            name: "samreen",
            username: "xcocomomo",
            date: "2022-11-09T12:55:12",
            content: "might never get used to being called meri jaan ",
        },
        {
            image: "https://pbs.twimg.com/profile_images/1480232572864983042/mTM5IHqM_400x400.jpg",
            name: "oreo",
            username: "shaxaddd",
            date: "2022-11-09T12:55:12",
            content: "i be like “damn i got a lot of shit to do” and then go lay down for 17 hours",
        },
        {
            image: "https://pbs.twimg.com/profile_images/1544261227433512961/A70fT58H_400x400.jpg",
            name: "The Xanax Lady",
            username: "thexanaxlady",
            date: "2022-11-07T12:55:12",
            content: "my twitter account will go down in history as the most ignored prophecies",
        },
        {
            image: "https://pbs.twimg.com/profile_images/1583186942019125248/G43RyAxm_400x400.jpg",
            name: "mujahid;",
            username: "mujahidxt",
            date: "2022-11-11T12:10:12",
            content: "sexual tension bw pending tasks vs crickets",
        },
        {
            image: "https://pbs.twimg.com/profile_images/1589784188366077954/Kgics_tM_400x400.jpg",
            name: "nayem",
            username: "nxyxm",
            date: "2022-11-09T12:55:12",
            content: "smile",
        },
        {
            image: "https://pbs.twimg.com/profile_images/1547461198030970882/UGOU5tu5_400x400.jpg",
            name: "Rooh",
            username: "sarangsaifullah",
            date: "2022-11-10T12:55:12",
            content: "would rather visit 4 countries in two weeks than feed 5 people at my wedding.",
        },
    ])

    return (
        <View>
            <Header />
            <ScrollView>
                {tweets.map((item, index) =>
                    <TweetCard key={index} tweet={item} />
                )}
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})