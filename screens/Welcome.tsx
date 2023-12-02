import { StyleSheet, Text, View, Image, Button, ImageBackground,} from 'react-native'
import React from 'react'
import appColors from '../assets/styles/appColors'
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = () => {

  return (
    <View>
      <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.contents}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Bienvenido</Text>
        <Image style={styles.waltah} source={require("..\\assets\\images\\perfil-de-usuario.webp")}/>
      </View>
      <View style={styles.loginButton}>
        <Button title='Iniciar sesión'/>
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
    alignSelf: 'center',
  },
  contents: {
    height: '100%'
  },
})