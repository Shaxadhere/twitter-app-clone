import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/constants/colors'
import spacing from '../config/constants/spacing'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TweetDetailsScreen = () => {
    const tweet = {
        image: "https://pbs.twimg.com/profile_images/1480232572864983042/mTM5IHqM_400x400.jpg",
        name: "oreo",
        username: "shaxaddd",
        date: "2022-11-09T12:55:12",
        content: "i be like “damn i got a lot of shit to do” and then go lay down for 17 hours",
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.dark }}>
            <View style={styles.tweetHead}>
                <View style={styles.userProfileInfoContainer}>
                    <View>
                        <Image
                            source={{
                                uri: tweet.image
                            }}
                            style={styles.avatar}
                        />
                    </View>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.nameText}>{tweet.name}</Text>
                        <Text style={styles.userNameText}>@{tweet.username}</Text>
                    </View>
                </View>
                <View>
                    <Image style={styles.viewMoreIcon} source={require("../assets/images/view-more.png")} />
                </View>
            </View>
            <View>
                <Text style={styles.tweetText}>
                    {tweet.content}
                </Text>
                <View style={styles.timeContainer}>
                    <Text style={styles.dateTime}>
                        {moment(tweet.date).format("HH:mm A DD/MM/YYYY")}
                    </Text>
                    <Text style={styles.deviceName}>
                        Twitter for iPhone
                    </Text>
                </View>
                <View style={styles.reachContainer}>
                    <View style={styles.reachItem}>
                        <Text style={styles.reachCount}>12</Text>
                        <Text style={styles.reachName}>Retweets</Text>
                    </View>
                    <View style={styles.reachItem}>
                        <Text style={styles.reachCount}>5</Text>
                        <Text style={styles.reachName}>Quote Tweets</Text>
                    </View>
                    <View style={styles.reachItem}>
                        <Text style={styles.reachCount}>58</Text>
                        <Text style={styles.reachName}>Likes</Text>
                    </View>
                </View>
                <View style={styles.tweetActionContainer}>
                    <TouchableOpacity>
                        <Image style={styles.commentIcon} source={require("../assets/images/comment.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.likeIcon} source={require("../assets/images/like.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.retweetIcon} source={require("../assets/images/retweet.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.shareIcon} source={require("../assets/images/share.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TweetDetailsScreen

const styles = StyleSheet.create({
    userProfileInfoContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    tweetHead: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: spacing,
        paddingVertical: spacing
    },
    avatar: {
        width: spacing * 4,
        height: spacing * 4,
        resizeMode: "contain",
        borderRadius: spacing * 5
    },
    nameText: {
        color: colors.white,
        fontWeight: "600"
    },
    userNameText: {
        color: colors.secondary,
    },
    userNameContainer: {
        marginLeft: spacing
    },
    viewMoreIcon: {
        width: spacing * 3,
        resizeMode: "contain"
    },
    tweetText: {
        color: colors.white,
        paddingHorizontal: spacing,
        fontSize: spacing * 1.7
    },
    dateTime: {
        color: colors.secondary,
        fontSize: spacing * 1.3
    },
    timeContainer: {
        flexDirection: "row",
        paddingHorizontal: spacing,
        paddingVertical: spacing
    },
    deviceName: {
        color: colors.primary,
        marginLeft: spacing * 1.5,
        fontSize: spacing * 1.3
    },
    reachContainer: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.dimBlack,
        alignItems: "center"
    },
    reachCount: {
        color: colors.white,
        fontWeight: "600"
    },
    reachName: {
        color: colors.secondary,
        marginLeft: spacing * 0.5
    },
    reachItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: spacing,
        paddingVertical: spacing * 0.8
    },
    tweetActionContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: colors.dimBlack,
        justifyContent: "space-between",
        alignItems: "center",
        height: spacing * 4,
        paddingVertical: spacing,
        paddingHorizontal: spacing * 3
    },
    commentIcon: {
        width: spacing * 2,
        resizeMode: "contain"
    },
    likeIcon: {
        width: spacing * 2.3,
        resizeMode: "contain"
    },
    retweetIcon: {
        width: spacing * 2.3,
        resizeMode: "contain"
    },
    shareIcon: {
        width: spacing * 2.5,
        resizeMode: "contain"
    }
})