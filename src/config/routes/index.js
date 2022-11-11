import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../../screens/HomeScreen'
import DirectMessageScreen from "../../screens/DirectMessageScreen"
import NotificationScreen from "../../screens/NotificationScreen"
import SearchScreen from "../../screens/SearchScreen"
import TweetDetailsScreen from "../../screens/TweetDetailsScreen"
import Header from '../../components/UI/Header'

const Stack = createNativeStackNavigator()

export const routes = {
    HOME: {
        name: "Home",
        component: HomeScreen,
        headerShown: true
    },
    DIRECT_MESSAGES: {
        name: "DirectMessageScreen",
        component: DirectMessageScreen,
        headerShown: true
    },
    NOTIFICATIONS: {
        name: "Notification",
        component: NotificationScreen,
        headerShown: true
    },
    SEARCH: {
        name: "Search",
        component: SearchScreen,
        headerShown: true
    },
    TWEET_DETAILS: {
        name: "TweetDetails",
        component: TweetDetailsScreen,
        headerShown: true
    },
}

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.TWEET_DETAILS.name}>
                {Object.keys(routes).map((item, index) => {
                    return (
                        <Stack.Screen
                            options={{
                                title: 'My home',
                                headerShown: routes[item].headerShown,
                                header: Header
                            }}
                            key={index}
                            name={routes[item].name}
                            component={routes[item].component}
                        />
                    )
                })}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes

const styles = StyleSheet.create({})