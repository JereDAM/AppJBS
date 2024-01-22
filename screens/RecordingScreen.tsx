import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import React from 'react'
import { AVPlaybackStatusSuccess, Audio } from 'expo-av'
import appColors from '../assets/styles/appColors'
import { Sound, SoundObject } from 'expo-av/build/Audio'
// import { Recording } from 'expo-av/build/Audio'

//Recordatorio, importar el elemento 'Audio' a manija

type RecordFile= {
    duration : number,
    sound: Sound,
    soundFile: File | null | undefined
}

const RecordingScreen = () => {

    const [recording, setRecording] = React.useState<Audio.Recording>();
    const [recordingList, setRecordingList] = React.useState([]);
    const [message, setMessage] = React.useState('');
    // const [playing, setIsPlaying] = React.useState<Boolean>(false)

    // const playRecordFile = async(recordFile : RecordFile) : Promise<void> => {
    //     const playbackObject = new Audio.Sound()
    //     await playbackObject.loadAsync({ uri: recordFile.uri});
    //     await playbackObject.playAsync()
    // }

    const startRecording = async() => {
        try {
            const permission = await Audio.requestPermissionsAsync()

            if(permission.granted){
                const { recording } = await Audio.Recording.createAsync(
                    Audio.RecordingOptionsPresets.HIGH_QUALITY       //Aqui hay algo de HIGHQUALITY
                )
                setRecording(recording)
                // setIsPlaying(true)
            } else {
                setMessage('Debes conceder permisos a la App para poder grabar')
            }
        } catch (error) {
            console.error('Falló la grabación: ', error);
        }
    }

    const stopRecording = async() => {
        setRecording(undefined)
        // setIsPlaying(false)
        await recording?.stopAndUnloadAsync()
        // await recording.stopAndUnloadAsync()
        const updatedRecordings : object[] = [...recordingList]
        const userRecording  = await recording?.createNewLoadedSoundAsync()
        const uri = recording?.getURI()
        console.log('Recording stopped and stored at', uri);
        updatedRecordings.push({
            sound: userRecording!.sound,
            //duration: getDurationFormatted(userRecording.status.durationMillis),
            file: recording!.getURI()
        })
    }

    const getDurationFormatted = (status : AVPlaybackStatusSuccess) => {
        
        let minutesDisplay;
        let secondsDisplay;

        if(status !== undefined && status.durationMillis){
            const minutes = status.durationMillis
            minutesDisplay = Math.floor(minutes)
            const seconds = Math.round((minutes - minutesDisplay) * 60)
            secondsDisplay = seconds < 60 ? `0${seconds}` : seconds
        }
        return `${minutesDisplay} : ${secondsDisplay}`
    }

    // const onClick = () => {
    //     recording ? startRecording() : stopRecording()
    // }

    const playSound = () => {
        console.log('loading sound');
        // const { sound } 
    }

  return (
    <View>
      <ImageBackground source={require("..\\assets\\images\\espacio.jpg")} resizeMode='cover' style={styles.backGround}>
        <TouchableOpacity style={styles.RecordingButton} onPress={recording ? stopRecording : startRecording}>
            {recording ? <Text style={styles.letrasGrabacion}>
              Grabando...
            </Text> : 
            <Text style={styles.letrasGrabacion}>
            Grabar
          </Text>}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default RecordingScreen

const styles = StyleSheet.create({
    backGround: {
        height: '100%'
    },
    letrasGrabacion: {
        color: appColors.primary,
        fontSize: 20
    },
    RecordingButton: {
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
})