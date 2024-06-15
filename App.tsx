import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import RootNavigator from "./src/Navigation/AppNavigation";
import Toast from 'react-native-toast-message';
import HomeProvider from "./src/context/HomeContextProvide";

const CustomStatusBar = () => {
  const statusBarStyle = 'light-content';
  const statusBarColor = Platform.select({
    android: '#5e6854',
    ios: '#5e6854'
  })
  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#5e6854' }} />
      <StatusBar backgroundColor={statusBarColor} barStyle={statusBarStyle} />
    </>
  )
}

const App = () => {
  return (
    <>
      <CustomStatusBar />
      <HomeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <RootNavigator />
          <Toast />
        </SafeAreaView>
      </HomeProvider>
    </>
  )
}

export default App