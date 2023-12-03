import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import appColors from '../assets/styles/appColors'
import { TextInput } from 'react-native-gesture-handler'

const LoginScreen = () => {
  return (
    <View>
      <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.backGround}>
        <View style={styles.login}>
          <Text style={styles.colorLetra}>
            Inicio de sesion
          </Text>
          <TextInput placeholder='Email' placeholderTextColor="#ffffff" style={styles.emailLogin}>
          </TextInput>
          <TextInput placeholder='Contraseña' placeholderTextColor="#ffffff" style={styles.passwordLogin} secureTextEntry={true}/>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.letrasInicioSesion}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  backGround: {
    height: '100%'
  },
  colorLetra: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 30,
    color: 'white'
  },
  login: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: '20%',
    height: 500,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  emailLogin:{
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 40,
    color: 'white',
    width: '90%',
    alignSelf: 'center',
  },
  passwordLogin:{
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 20,
    color: 'black',
    width: '90%',
    alignSelf: 'center',
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
    borderRadius: 50,
    marginTop: 100,
    
  },
  letrasInicioSesion: {
    color: 'white',
    fontSize: 20
  },
})