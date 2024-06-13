import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

function stringToProduct(result) {
    splits = result.split('product_name');
    removeStart = splits[1].replace('":"', '');
    removeEnd = removeStart.replace('","', '');
    return removeEnd
};

function searchAPI(barcode) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://world.openfoodfacts.org/api/v0/product/" + barcode +".json", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(stringToProduct(result)))
        .catch((error) => console.error(error));
    
};

export default function Scanner(navigation) {
  const [facing, setFacing] = useState('back');
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}
        barcodeScannerSettings={{barcodeTypes: ["qr", "code39", "ean13", "codabar", "upc_a"]}}
        onBarcodeScanned={(BarcodeScanningResult) => {if(!scanned){searchAPI(BarcodeScanningResult.data)}; setScanned(true)}}
        >    
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});