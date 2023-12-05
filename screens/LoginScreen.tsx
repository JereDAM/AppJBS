import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import appColors from '../assets/styles/appColors'
import { TextInput } from 'react-native-gesture-handler'
import { RenderUserContext } from '../components/context/renderWordContext'
import { StackNavigationProp } from '@react-navigation/stack'

type LoginProps ={
  navigation: StackNavigationProp<any>
}

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {



  const {user, handleUser, handleLogin} = useContext(RenderUserContext)


  return (
    <View>
      <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.backGround}>
        <View style={styles.login}>
          <Text style={styles.colorLetra}>
            Inicio de sesion
          </Text>
          <TextInput placeholder='Email' placeholderTextColor="#ffffff" style={styles.emailLogin} value={user} onChangeText={user=> handleUser(user)}>
          </TextInput>
          <TextInput placeholder='Contraseña' placeholderTextColor="#ffffff" style={styles.passwordLogin} secureTextEntry={true}/>
          <TouchableOpacity style={styles.loginButton} onPress={() => {handleLogin(); navigation.navigate('Home')}}>
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
    color: appColors.primary
  },
  login: {
    backgroundColor: appColors.transparencia,
    marginTop: '20%',
    height: 500,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  emailLogin:{
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: appColors.gray,
    marginTop: 40,
    color: appColors.primary,
    width: '90%',
    alignSelf: 'center',
  },
  passwordLogin:{
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 20,
    color: appColors.primary,
    width: '90%',
    alignSelf: 'center',
  },
  loginButton: {
    width: 200,
    borderStyle: 'solid',
    borderColor: appColors.primary,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height : 60,
    borderRadius: 50,
    marginTop: 100,
    
  },
  letrasInicioSesion: {
    color: appColors.primary,
    fontSize: 20
  },
})