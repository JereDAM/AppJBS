import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { DrawerNavigationOptions, DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/LoginScreen';
import appColors from '../assets/styles/appColors';
import { BottomTab } from './BottomTab';
import { RenderUserContext } from './context/renderWordContext';

const Drawer = createDrawerNavigator();

type DrawerProps = {
  navigation : DrawerNavigationProp<any>
}

const CustomDrawer : React.FC<DrawerProps> = ( {navigation} ) => {

  const {user, login} = useContext(RenderUserContext)

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
      {login ? null : <Drawer.Screen name='Login' component={LoginScreen} options={{ title : 'Inicio de sesión'}} />}
      <Drawer.Screen name='tab' component={BottomTab} options={{ title : 'Portfolio'}} />
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