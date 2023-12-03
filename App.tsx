import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from './components/CustomDrawer';
import appColors from './assets/styles/appColors';
import LoginScreen from './screens/LoginScreen';


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
    <View style={styles.appContainer}>
      <NavigationContainer >
        {/* <Stack.Navigator>
          <Stack.Screen name = "login" component={LoginScreen}/>
        </Stack.Navigator> */}
        <CustomDrawer></CustomDrawer>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
