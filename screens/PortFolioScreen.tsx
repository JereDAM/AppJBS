import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RenderUserContext } from '../components/context/renderWordContext'
import appColors from '../assets/styles/appColors'

type portfolioProps = {
    navigation : DrawerNavigationProp<any>
}

const PortfolioScreen : React.FC<portfolioProps>= ({navigation}) => {

    const {user, login} = useContext(RenderUserContext)

  return (
    <ImageBackground source={require('./../assets/images/FondoJSBApp.png')} resizeMode='cover' style={styles.fondaso}>
        <View style={styles.background}>
        {login ?           <View style={styles.cardContainer}>
         <ImageBackground
           source={require("./../assets/images/jerebackground2.jpg")}
           style={styles.BackImage}
           resizeMode="cover"
         >
           <View style={styles.cardContent}>
             <Image style={styles.avatar} source={require("./../assets/images/SoyEse.png")}/>
             <Text style={styles.cardTitle}>Sobre mi</Text>
           </View>
           <Text style={styles.bodyText}>Soy alumno de 2ºDAM y espero poder llegar a poder desarrollar mi propio videojuego. \nある中国人はかつてこう言いました。チンギンガン、チーチュンギンガン、チュチュチアオチョ </Text>
            <View style={styles.background}>
                <Text style={styles.likedInfo}>Los videojuegos</Text>
                <Text style={styles.likedInfo}>El anime</Text>
                <Text style={styles.likedInfo}>El tennis</Text>
            </View>
         </ImageBackground>
       </View> : null} 
        </View>
    </ImageBackground>

  )
}

export default PortfolioScreen

const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginTop: -9,
    },
    cardContent: {
      margin: 8,
      padding: 10,
      justifyContent: "center",
      borderRadius: 10,
      width: "70%",
      flexDirection: "row",
    },
    cardTitle: {
      fontWeight: "900",
      fontSize: 30,
      fontStyle: "italic",
      color: "white",
      paddingTop: 20,
      paddingLeft: 25,
      textShadowColor: "black",
      textShadowRadius: 1,
      textShadowOffset: {
        width: 2,
        height: 2,
      },
    },
    avatar: {
      height: 90,
      width: 90,
      borderRadius: 100,
    },
    BackImage: {
      padding: 15,
      width: 400,
    },
    bodyText: {
      color: "white",
      fontWeight: "700",
      paddingLeft: 30,
      paddingRight: 30,
      textShadowColor: "black",
      textShadowRadius: 1,
      textShadowOffset: {
        width: 2,
        height: 2,
      },
    },
    likedInfo: {
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 20,
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 16,
        color: "white",
      },
      background : {
        backgroundColor: appColors.transparencia,
        marginTop: 10
      },
      fondaso : {
        flex : 1
      }
  });