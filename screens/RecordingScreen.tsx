import { Button, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import React, { useEffect } from 'react'
import { AVPlaybackStatusSuccess, Audio } from 'expo-av'
import appColors from '../assets/styles/appColors'
import { Sound, SoundObject } from 'expo-av/build/Audio'
import { ScrollView } from 'react-native-gesture-handler'
import { getAudios, storeAudios } from '../services/recordStorage'
// import { Recording } from 'expo-av/build/Audio'

//Recordatorio, importar el elemento 'Audio' a manija

export type RecordFile= {
    duration : string,
    sound: Sound,
    file: string | null | undefined,
}

const RecordingScreen = () => {

    const [recording, setRecording] = React.useState<Audio.Recording>();
    const [recordingList, setRecordingList] = React.useState<RecordFile[]>([]);
    const [message, setMessage] = React.useState('');
    // const [playing, setIsPlaying] = React.useState<Boolean>(false)

    // const playRecordFile = async(recordFile : RecordFile) : Promise<void> => {
    //     const playbackObject = new Audio.Sound()
    //     await playbackObject.loadAsync({ uri: recordFile.file!});
    //     await playbackObject.playAsync()
    // }

    useEffect(() => {
        const allAudios = async () =>{
            let audioList = await getAudios()
            if(audioList !== null){
                setRecordingList(audioList)
            }
        }
        allAudios()
    }, [])
    
    const startRecording = async() => {
        try {
            const permission = await Audio.requestPermissionsAsync()

            if(permission.granted){
                const { recording } = await Audio.Recording.createAsync(
                    Audio.RecordingOptionsPresets.HIGH_QUALITY       //Aqui se le indica la cualidad, hay que ponerlo a manija
                )
                setRecording(recording)
            } else {
                setMessage('Debes conceder permisos a la App para poder grabar')
            }
        } catch (error) {
            console.error('Falló la grabación: ', error);
        }
    }

    const stopRecording = async() => {
        setRecording(undefined)

        await recording?.stopAndUnloadAsync()
        const userRecording  = await recording?.createNewLoadedSoundAsync()
        const uri = recording?.getURI()
        console.log('Recording stopped and stored at', uri);
        if ("durationMillis" in userRecording!.status){
            let newRecord : RecordFile = {
                sound: userRecording!.sound,
                duration: getDurationFormatted(userRecording!.status!.durationMillis!), //Se le pone exclamaciones para decirle al programa que le aseguras que vas a pasarlo y no un undefined
                file: recording!.getURI()
            }
            setRecordingList((existingList) => ([...existingList, newRecord]))
            await storeAudios([...recordingList, newRecord])
        }
    }

    const DeleteRecordings = async () => {
        setRecordingList(([]))
        await storeAudios([])
    }

    const getDurationFormatted = (milliseconds : number) => {
        const minutes = milliseconds / 1000 / 60
        const minutesDisplay =  Math.floor(minutes)
        const seconds = Math.round((minutes - minutesDisplay) * 60)
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds

        return `${minutesDisplay}:${secondsDisplay}`
    }

    //.Sound da error, no existe en el tipo never
    const getRecordingLines = () => {
        return recordingList.map((recordingLine, index) => {
            return(
                <View key={index} style={styles.row}>
                    <TouchableOpacity style={styles.playButton}onPress={() => (recordingLine.sound as Audio.Sound).replayAsync()}><Text style={styles.buttonWords}>PLAY</Text></TouchableOpacity>
                    <Text style={styles.fill}>Recording {index + 1} -  {recordingLine.duration}</Text>
                </View>
            )
        })
        
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
        <TouchableOpacity style={styles.RecordingButton} onPress={DeleteRecordings}>
            <Text style={styles.letrasGrabacion}>
            BORRAR TODO
            </Text>
        </TouchableOpacity>
        <ScrollView style={styles.scroll}>
            {getRecordingLines()}
        </ScrollView>
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
        marginTop: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    fill: {
        flex:1,
        margin: 16,
        color: appColors.primary
    },
    recordButton:{
        backgroundColor: appColors.primary
    },
    scroll: {
        backgroundColor: appColors.transparencia,
        marginTop: '5%',
        height: 500,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 30
    },
    playButton: {
        width: 50,
        borderStyle: 'solid',
        borderColor: appColors.primary,
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 20,
    },
    buttonWords : {
        color : appColors.primary
    }
})