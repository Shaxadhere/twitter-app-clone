import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import colors from "./config/constants/colors"
import AppRoutes from './config/routes';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <AppRoutes />
    </SafeAreaView>
  );
};
export default App;
