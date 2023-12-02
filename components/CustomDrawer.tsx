import { StyleSheet } from 'react-native'
import React from 'react'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/LoginScreen';
import appColors from '../assets/styles/appColors';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {

  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    // header: ({navigation}) => <CustomHeader navigation={navigation}></CustomHeader>,
    headerTitle: 'JSB App',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: appColors.secondary,
    },
    headerTintColor: appColors.black,
    drawerItemStyle: {
      width: '100%',
    },
    drawerActiveTintColor: appColors.primary,
    drawerActiveBackgroundColor: appColors.activeTab,
    drawerInactiveTintColor: "white",
    drawerInactiveBackgroundColor: appColors.secondary,
    drawerType: 'slide'
  }

  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={drawerNavigatorScreenOptions}>
      <Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'Menú Principal' }} />
      <Drawer.Screen name='Login' component={LoginScreen} options={{ title : 'Inicio de sesión'}} />
    </Drawer.Navigator>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerTitle: {

  }
})