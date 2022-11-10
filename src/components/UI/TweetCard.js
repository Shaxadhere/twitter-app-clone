import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

const { width } = Dimensions.get("window")

const TweetCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1546415342901239810/U8EaywSS_400x400.jpg"
                    }}
                    style={styles.avatar}
                />
                <View style={styles.cardBody}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>Thememestry</Text>
                        <Text style={styles.textSecondary}>@Thememestry</Text>
                        <Text style={styles.textSecondary}>1h</Text>
                    </View>
                    <View style={styles.tweetContainer}>
                        <Text style={styles.tweet}>
                            Yeah man, Riswan is religious, And his faith drives a lot of his work ethic.
                        </Text>
                        <Text style={styles.tweet}>
                            He has offered everyone else in the cricket fraternity nothing but respect and reverence. And if you ever hear him talk about his faith,
                            so much of it is driven by believing in God.
                        </Text>
                    </View>
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
        maxWidth: width - spacing * 6
    },
    tweetContainer: {
        marginVertical: spacing * 0.2
    }
})