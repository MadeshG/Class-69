import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { normalize } from 'yargs';
export default class IssueScreen extends React.Component{
    constructor(){
        super()
        this.state={
            haveCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCameraPermissions=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            haveCameraPermissions:status==='granted',
            buttonState:'click',
            scanned:false
        })
    }
    handleBarcodeScanned=async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal'
        })
    }
    render(){
        const haveCameraPermissions=this.state.haveCameraPermissions
        const scanned=this.state.scanned;
        const buttonState=this.state.buttonState
        if(buttonState==="click"&& haveCameraPermissions){
            return(
            <BarCodeScanner 
            onBarCodeScanned={scanned?undefined:this.handleBarcodeScanned}
            style={StyleSheet.absoluteFillObject}
            />
            )
        }
        else if(buttonState==="normal"){

        
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.OutputStyle}>haveCameraPermissions===true?this.state.scannedData:"requestCameraPermissions"</Text>
                <TouchableOpacity onPress={this.getCameraPermissions}
                 style={styles.ScanButton}>
                <Text style={styles.ButtonText}>Scan here</Text>
                </TouchableOpacity>
            </View>
        )
        }
    }
}
const styles=StyleSheet.create({
    ScanButton:{
        backgroundColor:"Red",
        margin:10,
        padding:10
    },
    ButtonText:{
        fontSize:20
    },
    OutputStyle:{
        fontSize:20,
        textDecorationLine:'underline'
    }
})