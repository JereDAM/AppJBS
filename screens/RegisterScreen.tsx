import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import appColors from '../assets/styles/appColors'
import { TextInput } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack'
import { RenderUserContext } from '../components/context/renderWordContext'

type LoginProps ={
    navigation: StackNavigationProp<any>
  }

const RegisterScreen: React.FC<LoginProps> = ({navigation}) => {

    const {user, handleUser, handleLogin, login, handleRegistration} = useContext(RenderUserContext)

  return (
    <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.backGround}>
        <View style = {styles.RegisterBox}>
            <Text style = {styles.prueba}>Registrate</Text>
            <TextInput placeholder='Nombre' placeholderTextColor="#ffffff" style={styles.Registration}/>
            <TextInput placeholder='Email' placeholderTextColor="#ffffff" style={styles.Registration}/>
            <TextInput placeholder='Contraseña' placeholderTextColor="#ffffff" style={styles.Registration} secureTextEntry={true}/>
            <TouchableOpacity style={styles.RegisterButton} onPress={() => {handleRegistration; navigation.navigate('Home')}}>
            <Text style={styles.letrasInicioSesion}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    backGround: {
        height: '100%'
    },
    prueba: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 30,
        color: appColors.primary
    },
    RegisterBox: {
        backgroundColor: appColors.transparencia,
        marginTop: '20%',
        height: 500,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 50,
    },
    Registration:{
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: appColors.gray,
        marginTop: 40,
        color: appColors.primary,
        width: '90%',
        alignSelf: 'center',
    },
    RegisterButton:{
        width: 200,
        borderStyle: 'solid',
        borderColor: appColors.primary,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height : 60,
        borderRadius: 50,
        marginTop: 150,
    },
    letrasInicioSesion: {
        color: appColors.primary,
        fontSize: 20,
      }
})