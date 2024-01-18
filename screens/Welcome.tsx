import { StyleSheet, Text, View, Image, Button, ImageBackground, Pressable,} from 'react-native'
import React, { useContext } from 'react'
import appColors from '../assets/styles/appColors'
import {createStackNavigator} from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RenderUserContext } from '../components/context/renderWordContext';
import { loginUser, userlogOut } from '../services/practicaService';


type welcomeProps = {
  navigation : DrawerNavigationProp<any>
}

const HomeScreen : React.FC<welcomeProps> = ( {navigation} ) => {


  const {user, login, handleLogout} = useContext(RenderUserContext)

  const userLogout = async () => {
    const serviceLogout = await userlogOut()
    if(serviceLogout != null){
      handleLogout()
      navigation.navigate('Home')
    } else {
      console.log("Huvo un error al cerrar sesión");
      
    }
  }

  return (
    <View>
      <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.contents}>
      <View style={styles.titleBox}>
        {login ? <Text style={styles.title}>
          Bienvenido,{user.name}
          </Text> 
          : 
          <Text style={styles.title}>
            Bienvenido  
          </Text>} 
        <Image style={styles.waltah} source={require("..\\assets\\images\\perfil-de-usuario.webp")}/>
      </View>
      <View>
        {login ? 
        <TouchableOpacity style={styles.loginButton} onPress={() => {userLogout()}}>
          <Text style={styles.letrasInicioSesion}>
            Cerrar Sesión
          </Text>
        </TouchableOpacity> : 
        
        <TouchableOpacity style={styles.loginButton} onPress={() => {navigation.navigate('Login')}}>
          <Text style={styles.letrasInicioSesion}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>}
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
    color: appColors.primary,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: appColors.primary,
    borderWidth: 1,
    padding: 20
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
    width: '90%',
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: '50%'
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
    borderRadius: 50
  },
  letrasInicioSesion: {
    color: appColors.primary,
  },
  contents: {
    height: '100%'
  },
})