import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';

function stringToProduct(result) {
    splits = result.split('product_name');
    removeStart = splits[1].replace('":"', '');
    removeEnd = removeStart.replace('","', '');
    console.log(removeEnd)
    return removeEnd;
};

export default function Scanner({navigation}) {
  const [facing, setFacing] = useState('back');
  const [scanned, setScanned] = useState(false);
  const [food, setFood] = useState("food");
  const [permission, requestPermission] = useCameraPermissions();
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute()
    const starterIngredients = route.params?.ingredients;
    ingredients = {}
    if(starterIngredients != null){
        ingredients = Object.assign({}, ingredients, starterIngredients)
    }
    console.log(ingredients)

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

  function searchAPI(barcode)  {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      fetch("https://world.openfoodfacts.org/api/v0/product/" + barcode +".json", requestOptions)
        .then((response) => response.text())
        .then((result) => {setFood(stringToProduct(result))})
        .catch((error) => console.error(error));
    
    }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}
        barcodeScannerSettings={{barcodeTypes: ["qr", "code39", "ean13", "codabar", "upc_a"]}}
        onBarcodeScanned={(BarcodeScanningResult) => {if(!scanned){searchAPI(BarcodeScanningResult.data); setModalVisible(true); setScanned(true)}}}
        >
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={{flexDirection: "column", width: "90%", height: "15%", backgroundColor:"white", justifyContent: "center", alignSelf: "center", marginTop: "30%", borderRadius: 20, padding: 20}}>
                <View style={{flex:1}}>
                    <Text style={{textAlign: "center"}}>Would you like to add {food}?</Text>
                </View>
                <View style={{flex:1, flexDirection: "row"}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>{setModalVisible(false); ingredients[food] = 1; navigation.navigate("Home", { ingredients: [food, 1] })}}><Text style={{textAlign:"center"}}>Yes</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={()=>{setScanned(false); setModalVisible(false)}}><Text style={{textAlign:"center"}}>No</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>    
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