import { FlatList, StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { PaymentIhistory } from '../../../../data';



interface History {
    id?: number;
    image?: string;
    name: string;
    date: string;
}


const PaymentHistory = () => {

    const Item = ({ name, date, image }: History) => {
        return (

            <View style={styles.listStyle} >
                <Image style={styles.stretch} source={require("../../../../assets/avatar.jpeg")} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
                    <Text>{date}</Text>
                </View>
            </View>
        )
    }
    return (
        <View>
            {/* <ApHeader /> */}

            <SafeAreaView>
                <ScrollView style={{ height: 400, }} >
                    <View style={{ paddingBottom: 10 }}>
                        <View style={styles.containerStyle}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center", padding: 5,
                            }}>
                                <Feather name="circle" size={64} color="black" />

                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Setup Your Account</Text>
                                    <Text style={{ fontSize: 12, width: 250 }}>Complete your account setup and explore Kuda's features</Text>
                                </View>
                            </View>

                            <View style={{ position: "absolute", right: 9, top: -17, }}>
                                <Ionicons name="md-rocket-outline" size={54} color="black" />
                            </View>
                        </View>

                        <View><Text style={{ color: "grey" }}>02, Jul 2023</Text></View>

                        <FlatList
                            data={PaymentIhistory}
                            renderItem={({ item }) => <Item name={item.name} date={item.date} />}
                            keyExtractor={item => item?.id}
                        />

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>




    )
}

export default PaymentHistory

const styles = StyleSheet.create({
    containerStyle: {
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        shadowColor: "grey",
        // shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, shadowRadius: 4,
        marginVertical: 13
    },
    stretch: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
    },

    listStyle: {
        flexDirection: "row",
        borderRadius: 8,
        alignItems: "center",
        padding: 5,
        paddingVertical: 15,
        shadowColor: "grey",
        // shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4

    }

})