import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from "react-native-qrcode-svg";

const QRScreen = () => {
  return (
    <View style={styles.CenterQRCode}>
        <QRCode value="https://github.com/JereDAM/AppJBS.git"/>
    </View>
  )
}

export default QRScreen

const styles = StyleSheet.create({
    CenterQRCode: {
        flex: 2,
        marginLeft: '40%',
        marginTop: '30%'
    }
})