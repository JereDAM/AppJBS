import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import appColors from '../assets/styles/appColors'

const ActividadApiScreen = () => {

    let [boredActivity, setBoderActivity] = useState<string>()

  return (
    <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.backGround}>
        <View>
            <Text style={styles.activityTitle}>El HacerAlgoNator</Text>
        </View>
    </ImageBackground>
  )
}

export default ActividadApiScreen

const styles = StyleSheet.create({
    backGround: {
        height: '100%'
      },
    activityTitle:{
        color: appColors.primary,
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 20
    }
})