// import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
// import React from 'react'
// import { AntDesign } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const ApHeader = () => {

//     const navigation = useNavigation()
//     return (
//         <View>
//             <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 5 }}>
//                 <View style={{ flexDirection: "row", rowGap: 10, alignItems: "center" }}>
//                     <Image style={styles.stretch} source={require("../../../../assets/avatar.jpeg")} />
//                     <Text style={{ color: "purple", fontWeight: "bold", paddingLeft: 5 }}>Hi, Sodiq</Text>
//                 </View>
//                 <View>
//                     <AntDesign name="piechart" size={24} color="purple" />
//                 </View>
//             </View>

//             <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 5, }}>
//                 <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate("Home")}>
//                     <Text style={{ color: "purple" }}>Save</Text></Pressable>
//                 <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate("Send")}>
//                     <Text>Spend</Text></Pressable>
//                 <Pressable style={styles.buttonStyle}><Text>Send</Text></Pressable>
//             </View>
//         </View>

//     )
// }

// export default ApHeader

// const styles = StyleSheet.create({
//     stretch: {
//         width: 50,
//         height: 50,
//         resizeMode: 'stretch',
//     },
//     buttonStyle: {
//         borderRadius: 7,
//         paddingVertical: 11,
//         paddingHorizontal: 20,
//         backgroundColor: "white",
//         shadowColor: "grey",
//         // shadowColor: 'rgba(0, 0, 0, 0.5)',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8, shadowRadius: 4

//     }
// })