import { StyleSheet, Text, View, Image, Button, ImageBackground,} from 'react-native'
import React from 'react'
import appColors from '../assets/styles/appColors'
import {createStackNavigator} from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

type welcomeProps = {
  navigation : DrawerNavigationProp<any>
}

const HomeScreen : React.FC<welcomeProps> = ( {navigation} ) => {

  return (
    <View>
      <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.contents}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Bienvenido</Text>
        <Image style={styles.waltah} source={require("..\\assets\\images\\perfil-de-usuario.webp")}/>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton} onPress={() => {navigation.navigate('Login')}}>
          <Text style={styles.letrasInicioSesion}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground> 
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  title: {
    fontStyle: 'italic',
    fontSize:40,
    justifyContent: 'center',
    alignSelf: 'center',
    color: appColors.primary
  },
  waltah: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 200,
    height: 80,
    width:80,
    marginLeft: 10
  },
  titleBox: {
    width: 350,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: appColors.activeTab,
    flexDirection: 'row',
    margin: '50%'
  },
  loginButton: {
    width: 200,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height : 60,
    borderRadius: 50
  },
  letrasInicioSesion: {
    color: 'white',
  },
  contents: {
    height: '100%'
  },
})