import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs'


const App = (props) => {

  const[{cameraRef},{takePicture}] = useCamera('null')

  const CaptureHandler = async() =>{
    try {
      const data = await takePicture();
      console.log(data.uri)
      const filePath = data.uri;
     const newFilePath = RNFS.ExternalDirectoryPath
     RNFS.moveFile(filePath,newFilePath)
    } catch (error) {
      console.log(error)
    }
  }

  return (
     <RNCamera
      ref={cameraRef}
      type={RNCamera.Constants.Type.back}
      style={{flex:1}}>
      <TouchableOpacity onPress={CaptureHandler} style={{position:'absolute',borderRadius:20,left:160,top:700,height:50,width:100,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
        <Text style={{color:'white',alignSelf:'center',fontSize:18,fontWeight:'bold'}}>Capture</Text>
      </TouchableOpacity>
     </RNCamera>
  );
};

export default App;





