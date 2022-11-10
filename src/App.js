import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import colors from "./config/constants/colors"
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <HomeScreen />
    </SafeAreaView>
  );
};
export default App;
