import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/Routes';

import { colors } from './src/styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle='light-content'
      />
      <Routes />
    </>
  );
};
