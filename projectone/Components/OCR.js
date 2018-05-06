import React, { Component } from 'react'
import RNTesseractOcr from 'react-native-tesseract-ocr';
import ImagePicker from 'react-native-image-picker'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native';

import style from '../Style'

const styles = StyleSheet.create(style);

const tessOptions = {
 whitelist: null,
 blacklist: '1234567890\'!"#$%&/()={}[]+*-_:;<>'
};

const options = {
  title: 'Select Image',
  // customButtons: [
  //   {name: 'fb', title: 'Choose Photo from Facebook'},
  // ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
  maxWidth: 2250,
  maxHeight: 2250,
};

class OCR extends Component {
  constructor(props){
    super(props)
    this.state={
      image: 'https://c.kaskus.id/kaskus_forum_image/p3gmvk_1517469439.407_.jpg',
      ocrResult: ''
    }
  }

  upload(){
    ImagePicker.showImagePicker(options, (response) => {
      let source = { uri: response.uri, isStatic: true }
      this.setState({ image: response.uri }, this.readImage(response.path));
    });
  }
  readImage(path) {
    RNTesseractOcr.recognize(path, 'LANG_INDONESIAN', tessOptions)
      .then((result) => {
        this.setState({ isLoading: false, ocrResult: result });
      })
      .catch((err) => {
        alert('OCR Error: ', err);
      })
      .done();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={{width: 200, height: 200}} source={{uri:this.state.image}} />
          <Button
            onPress={()=> this.upload()}
            title="Upload"
            color="black"
          />
          <ActivityIndicator
            animating={true}
            size="large"
          />
          <Text>{this.state.ocrResult}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default OCR
