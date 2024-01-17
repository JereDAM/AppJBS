import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import appColors from '../assets/styles/appColors'
import { TextInput } from 'react-native-gesture-handler'
import { RenderUserContext } from '../components/context/renderWordContext'
import { StackNavigationProp } from '@react-navigation/stack'
import { loginUser } from '../services/practicaService'

type LoginProps = {
  navigation: StackNavigationProp<any>
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {

  const { user, handleLogin, handleUser, login } = useContext(RenderUserContext)

  const [nombre, setNombre] = React.useState('')
  const [userPassword, setUserPassword] = React.useState('')
  // const [email, setEmail] = React.useState('')
  // const [contraseña, setContraseña] = React.useState('')
  // const [user, setUser]= React.useState({
  //   nombre: '',
  //   email: '',
  //   password:''
  // })

  const onClick = async () => {
    const userData = await loginUser(nombre, userPassword)
    
    console.log(userData);
    console.log(user);

    if (userData != null) {
      await handleLogin()
      await handleUser(nombre)
    } else {
      console.log("No hay usuario o contraseña");
    }
  }

  return (
    <View>
      {login ? null : <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.backGround}>
        <View style={styles.login}>
          <Text style={styles.colorLetra}>
            Inicio de sesion
          </Text>
          <TextInput placeholder='Nombre de usuario' placeholderTextColor="#ffffff" style={styles.emailLogin} value={nombre} onChangeText={setNombre}>
          </TextInput>
          <TextInput placeholder='Contraseña' placeholderTextColor="#ffffff" style={styles.passwordLogin} secureTextEntry={true} value={userPassword} onChangeText={setUserPassword} />
          <TouchableOpacity style={styles.loginButton} onPress={onClick}>
            <Text style={styles.letrasInicioSesion}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.loginButton} onPress={() => pruebaLogin()}>
          <Text style={styles.letrasInicioSesion}>
            Prueba
          </Text>
        </TouchableOpacity> */}
          <TouchableOpacity style={styles.loginButton} onPress={() => { navigation.navigate('Register') }}>
            <Text style={styles.letrasInicioSesion}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>}
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
  emailLogin: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: appColors.gray,
    marginTop: 40,
    color: appColors.primary,
    width: '90%',
    alignSelf: 'center',
  },
  passwordLogin: {
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
    height: 60,
    borderRadius: 50,
    marginTop: 100,
  },
  letrasInicioSesion: {
    color: appColors.primary,
    fontSize: 20
  },
})