import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const dialpad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'SignOut', 0, 'del'];
const keySize = width * .2;
const keyTextSize = keySize / 3;
const keyGap = keySize * .5;
const keyColor = 'black';
const numberOfDigits = 4;
const pinIndicatorSize = (width / numberOfDigits) * 0.3; // reduce size so it doesn't overflow


const SignInScreen = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState([]);

    const handlePress = (key) => {
        if (typeof key === 'number' && code.length <= numberOfDigits) {
            setCode([...code, key])
        } else {
            setCode(prev => prev.slice(0, code.length - 1))
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white'
            }}
        >

            <View>
                <View> <Image style={styles.stretch} source={require("../../../assets/avatar.jpeg")} /></View>
                <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 20, }}>Welcome Back</Text>
                <Text style={{ textAlign: "center", marginTop: 3 }}>Sodiq Abdulazeez</Text>
            </View>

            <View style={{
                flexDirection: "row", alignItems: 'center',
                justifyContent: 'center'
            }}>
                <FontAwesome name="lock" size={20} color="green" />
                <Text style={{ textAlign: "center", fontSize: 17, marginVertical: 30, padding: 10 }}
                    onPress={() => {
                        navigation.navigate("Home");
                    }}>Passcode</Text>
            </View>

     
            <FlatList
                style={{ flexGrow: 0 }}
                data={dialpad}
                numColumns={3}
                columnWrapperStyle={{ gap: keyGap }}
                contentContainerStyle={{ gap: keyGap }}
                keyExtractor={(item: any) => item}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            width: keySize,
                            // height: keySize,
                            // borderRadius: keySize,
                            // borderWidth: typeof item === 'number' ? 1 : 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            // borderColor: keyColor
                        }}
                    // onPress={() => handlePress(item)}
                    >
                        <Text style={{
                            fontSize: keyTextSize,
                            color: keyColor,
                            fontWeight: "bold",

                        }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}


export default SignInScreen

const styles = StyleSheet.create({
    stretch: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    },
})