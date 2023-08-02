import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';

const Camera: React.FC = () => {
  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument() as any;

    // get back an array with scanned image file paths
    if (scannedImages!.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0])
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {scannedImage != null ?
        (
          <View>
            <Image
              source={{ uri: scannedImage }} // Substitua a URL pela URL da sua imagem
              resizeMode="contain" // Defina o modo de redimensionamento desejado, por exemplo, "contain" ou "cover"
              style={styles.image}
            />
            <TouchableOpacity style={styles.sendImage}>
              <Text style={{color: 'white'}}>Enviar por e-mail</Text>
            </TouchableOpacity>
          </View>
        ) :

        <TouchableOpacity style={styles.captureButton} onPress={() => scanDocument()} ></TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 4,
    alignSelf: 'center'
  },
  captureButton: {
    width: 70,
    height: 70,
    backgroundColor: 'gray',
    borderWidth: 5,
    borderColor: '#cdcdcd',
    borderRadius: 35,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20
  },
  sendImage: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#436EAD',
    borderWidth: 1,
    borderColor: '#6F97CA',
    alignSelf: 'center',
    marginTop: 16
  }
});
export default Camera;