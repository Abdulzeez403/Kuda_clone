import { Button, Pressable, StyleSheet, Text, View, SafeAreaView, Modal, Switch } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import PaymentHistory from './list';
import CountryFlag from "react-native-country-flag";


const SendScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (


        <View>

            <View style={{
                flexDirection: "row", justifyContent: "space-between",
                alignItems: "center", marginVertical: 10
            }}>
                <View style={{ flex: 1, columnGap: 15 }} >
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center", padding: 10,
                    }}>

                        <CountryFlag isoCode="ng" size={20} />
                        <Text style={{
                            fontFamily: "Roboto", fontSize: 15,
                            marginVertical: 8,
                            fontWeight: "bold",
                            marginLeft: 10
                        }}>Nigerian Naria</Text>
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text style={{
                            fontWeight: "bold", fontSize: 25,
                            fontFamily: "Roboto"
                        }}> {'\u20A6'}200.0000.000</Text>

                    </View>
                    <Text Style={{ color: "grey", marginTop: 20 }}>Last updated 2 min 54 sec ago</Text>
                </View>

                <View style={{ backgroundColor: "#C5C5C5", borderRadius: 50, padding: 6 }}
                >
                    <Entypo name="dots-three-horizontal" size={26} color="black"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 5 }}>
                <Pressable style={styles.buttonStyle}>
                    <View style={styles.buttonItemsStyle}>
                        <View style={styles.buttonIconStyle}>
                            <Ionicons name="repeat-outline" size={20} color="white" />
                        </View>
                        <Text style={styles.buttonTextStyle}>Convert</Text>
                    </View>

                </Pressable>

                <Pressable style={styles.buttonStyle}>
                    <View style={styles.buttonItemsStyle}>
                        <View style={styles.buttonIconStyle}>
                            <AntDesign name="plus" size={20} color="white" />
                        </View>
                        <Text style={styles.buttonTextStyle}>Add Money</Text>
                    </View>

                </Pressable>

            </View>

            <View>
                <PaymentHistory />
            </View>


            <Modal

                animationType="slide"
                transparent={true}
                visible={modalVisible}>

                <View style={styles.modalStyle}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, paddingTop: 5 }}>Account</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 14, backgroundColor: "white" }}>
                        <View>
                            <View style={{ flexDirection: "row", gap: 8 }}>
                                <View style={{}}>
                                    <CountryFlag isoCode="ng" size={20} />

                                </View>

                                <View>
                                    <Text style={styles.AmountStyle}>Nigerain Naria</Text>
                                    <Text>NGN</Text>
                                </View>


                            </View>

                        </View>
                        <Text style={styles.AmountStyle}> {'\u20A6'}200.0000.000</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <View style={{}}>
                                <CountryFlag isoCode="ng" size={20} />
                            </View>

                            <View>
                                <Text style={styles.AmountStyle}>Hide Balance</Text>
                            </View>
                        </View>

                        <View>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>

                    </View>

                </View>

                <Pressable style={{ backgroundColor: "purple", paddingVertical: 10 }} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[styles.AmountStyle, { textAlign: "center", color: "white" }]}>Close</Text>
                </Pressable>
            </Modal>


        </View>






    )
};

export default SendScreen

const styles = StyleSheet.create({

    buttonStyle: {
        width: 170,
        borderRadius: 7,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: "white",
        shadowColor: "grey",
        // shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, shadowRadius: 4

    },
    buttonTextStyle: {
        paddingLeft: 10,
        fontSize: 17,
        fontFamily: "Roboto"
    },
    buttonItemsStyle: {
        flexDirection: "row",
        alignItems: "center",
        padding: 0
    },

    buttonIconStyle: {
        backgroundColor: "#40196d",
        borderRadius: 50,
        padding: 4,
        margin: 0,
    },

    modalStyle: {
        height: 240, backgroundColor: "gray",
        marginTop: 390,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 5,
        gap: 10
    },
    AmountStyle: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Roboto"

    }
})