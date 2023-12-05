import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from './components/CustomDrawer';
import appColors from './assets/styles/appColors';
import LoginScreen from './screens/LoginScreen';
import RenderWordContextProvider from './components/context/RenderWordContextProvider';


export default function App() {

  const myTheme: Theme = {
    dark: false,
    colors: {
      primary: appColors.primary,
      background: appColors.secondary,
      card: appColors.primary,
      text: appColors.secondary,
      border: 'yellow',
      notification: 'purple',
    },
  }

  const Stack = createNativeStackNavigator();

  return (
    <RenderWordContextProvider>
      <View style={styles.appContainer}>
        <NavigationContainer >
          <CustomDrawer></CustomDrawer>
        </NavigationContainer>
      </View>
    </RenderWordContextProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
