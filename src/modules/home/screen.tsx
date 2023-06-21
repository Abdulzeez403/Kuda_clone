import { StyleSheet, Text, View, Image, Button, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SendScreen from './components/send';
import SpendScreen from './components/spend';
import BorrowScreen from './components/borrow';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [swiper, setSwiper] = useState("send");
  console.log(swiper)

  return (
    <View style={{ backgroundColor: "white", padding: 10 }}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 5 }}>
          <View style={{ flexDirection: "row", rowGap: 10, alignItems: "center" }}>
            <Image style={styles.stretch} source={require("../../../assets/avatar.jpeg")} />
            <Text style={{ color: "purple", fontWeight: "bold", paddingLeft: 5 }}>Hi, Sodiq</Text>
          </View>
          <View>
            <AntDesign name="piechart" size={24} color="purple" />
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 5, }}>
          <Pressable style={styles.buttonStyle} onPress={() => setSwiper("send")}>
            <Text style={{ color: "purple", fontWeight: 600 }}>Send</Text></Pressable>
          <Pressable style={styles.buttonStyle} onPress={() => setSwiper("spend")}>
            <Text>Spend</Text></Pressable>
          <Pressable style={styles.buttonStyle} onPress={() => setSwiper("borrow")}><Text>Borrow</Text></Pressable>
        </View>
      </View>

      <View>
        <ScrollView  >
          <View style={swiper === "send" ? { display: "flex" } : { display: "none" }}><SendScreen /></View>
          <View style={swiper === "spend" ? { display: "flex" } : { display: "none" }}><SpendScreen /></View>
          <View style={swiper === "borrow" ? { display: "flex" } : { display: "none" }}><BorrowScreen /></View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  buttonStyle: {
    borderRadius: 7,
    paddingVertical: 11,
    paddingHorizontal: 20,
    backgroundColor: "white",
    shadowColor: "grey",
    // shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8, shadowRadius: 4,


  }
})