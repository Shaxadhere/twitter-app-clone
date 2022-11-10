import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1480232572864983042/mTM5IHqM_400x400.jpg"
        }}
        style={styles.avatar}
      />
      <Image
        source={require("../../assets/images/app-logo.png")}
        style={styles.logo}
      />
      <TouchableOpacity>
        <Image style={styles.starIcon} source={require("../../assets/images/stars.png")} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: "row",
    paddingVertical: spacing * 1.5,
    paddingHorizontal: spacing * 1.5,
    borderBottomWidth: 1,
    borderBottomColor: colors.dimBlack
  },
  avatar: {
    width: spacing * 3,
    height: spacing * 3,
    resizeMode: "contain",
    borderRadius: spacing * 5
  },
  logo: {
    width: spacing * 3.5,
    height: spacing * 3.5,
    resizeMode: "contain"
  },
  starIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  }
})