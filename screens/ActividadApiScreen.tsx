import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import appColors from '../assets/styles/appColors'
import { getActivity } from '../services/boredService'

const ActividadApiScreen = () => {

    let [boredActivity, setBoderActivity] = useState<string>()
    let [dogsFacts, setDogsFacts] = useState<string[]>([]);
    let [displaySpinner, setDisplaySpinner] = useState<boolean>(false);


    // const newDogsFacts = await getDogsFacts(totalFacts)
    // setDogsFacts(newDogsFacts)

    
    const data = async() => {
        const newActivities = await getActivity()
        setBoderActivity(newActivities)
    }
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