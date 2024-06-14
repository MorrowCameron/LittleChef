import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/button';
import BottomBar from '../components/bottomBar';
import Search from '../components/search';
import Textbox from '../components/textbox';
import IngredientObj from '../components/Ingredient';
import { StatusBar } from 'expo-status-bar';
import { RED } from '@env';

export default function HomeScreen({navigation}) {

    function handleUpdate(starterIngredients) {
        if(starterIngredients.length > 0){
            Ingredient[starterIngredients[0]] = starterIngredients[1]
        }
    }
    const route = useRoute()
    const starterIngredients = route.params?.ingredients;
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState("test");
    console.log(starterIngredients)
    const [Ingredient, setIngredients] = useState({})
    console.log(Ingredient)
    handleUpdate(starterIngredients);
    return (
        <View style={{flex: 1, opacity: modalVisible ? 0.5 : 1, backgroundColor: "black"}}>
            <LinearGradient
            colors = { ['#F4DDFF','#FFCFAE'] }
            start = { { x: 0, y: 0 } }
            end = { { x: 0, y: 1 } }
            style = { styles.container }
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <View style={{width: "100%", height: "100%", alignSelf: "center"}}>
                            <View style={{alignSelf: "center", backgroundColor: "white", width: "100%", height: "8%", marginTop: "10%", flexDirection: "row", paddingLeft: 20, color: "black"}}>
                                <View style={{flex: 4, justifyContent: "center"}}>
                                    <Textbox placeholder="Enter Ingredient" style={{fontSize: 30, justifyContent: "center"}} value={text} onEndEditing={newText => {setIngredients({...Ingredient, [newText.nativeEvent.text] : 1})}}></Textbox>
                                </View>
                                <TouchableOpacity style={{flex: 1, justifyContent: "center"}} onPress={() => {setModalVisible(false); navigation.navigate('Scanner', { ingredients:Ingredient })}}>
                                    <Image source={require("../assets/images/Camera.png")} style={{height: 40, width: 50}}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
            </Modal>
                <View style={[styles.dropShadow, {flex: 4, width: "80%"}]}>
                    <LinearGradient 
                        colors = { ['#FAEBFC', '#FFEBDD'] } 
                        start = {{ x: 0, y: 0 }}
                        end = {{ x: 0, y: 1 }}
                        style={[styles.container, {width: "100%", marginVertical: "10%", borderRadius: 10}]}>
                        <View style={{flex: 0.7, justifyContent: "center", alignItems: "center"}}>
                            <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30}}>Ingredients</Text>
                        </View>
                        <View style={{height: "0.5%", width: "80%", backgroundColor: RED}}></View>
                        <View style={{flex: 0.5, marginTop: 10}}>
                            <Search OnPress={() => (setModalVisible(!modalVisible))}></Search>
                        </View>
                        <View style={{flex: 3, flexDirection: 'column', alignSelf: "center", marginVertical: "5%",width: "90%", justifyContent: "space-around"}}>
                            <ScrollView>
                                {Object.keys(Ingredient).map((key) => 
                                    key.length > 15 ? 
                                    <IngredientObj ingredient={key.substring(0,15) + "..."} count={Ingredient[key]}></IngredientObj>
                                    :
                                    <IngredientObj ingredient={key} count={Ingredient[key]}></IngredientObj>
                                    )
                                }
                            </ScrollView>
                        </View>
                        <StatusBar style="auto" />
                    </LinearGradient>
                </View>
                <View style={{flex: 0.5}}>
                    <Button 
                        onPress={()=>{navigation.navigate('Generator')}}
                        title="Generate Recipe"
                        />
                </View>
                <View style={{flex: 1, width: "100%"}}>
                    <BottomBar navigator={navigation}></BottomBar>
                </View>
        </LinearGradient>
        </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    }
});
  