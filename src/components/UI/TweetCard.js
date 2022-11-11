import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Touchable, Pressable } from 'react-native'
import React from 'react'
import moment from 'moment/moment'
import colors from '../../config/constants/colors'

const { width } = Dimensions.get("window")

const TweetCard = ({ tweet }) => {
    const { image, name, username, date, content } = tweet
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Pressable onPress={() => alert("ok")}>
                    <Image
                        source={{
                            uri: image
                        }}
                        style={styles.avatar}
                    />
                </Pressable>
                <View style={styles.cardBody}>
                    <Pressable>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>{name}</Text>
                            <Text style={styles.textSecondary}>@{username}</Text>
                            <Text style={styles.textSecondary}>{moment(date).fromNow(true) + " ago"}</Text>
                        </View>
                        <View style={styles.tweetContainer}>
                            <Text style={styles.tweet}>
                                {content}
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default TweetCard

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.dimBlack
    },
    avatar: {
        width: spacing * 4,
        height: spacing * 4,
        borderRadius: spacing * 5
    },
    card: {
        padding: spacing,
        flexDirection: "row",
    },
    cardBody: {
        marginLeft: spacing * 1.2
    },
    nameText: {
        color: colors.white,
        fontWeight: "600",
        fontSize: spacing * 1.2
    },
    nameContainer: {
        flexDirection: "row",
    },
    textSecondary: {
        color: colors.secondary,
        marginLeft: spacing,
        fontSize: spacing * 1.2
    },
    tweet: {
        color: colors.white,
        maxWidth: width - spacing * 6.5,
        lineHeight: 22
    },
    tweetContainer: {
        marginVertical: spacing * 0.2
    }
})