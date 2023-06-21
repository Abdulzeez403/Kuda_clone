import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import HomeScreen from "../modules/home/screen";
import PayScreen from "../modules/pay/screen";
import InvestScreen from "../modules/invest/screen";
import CardScreen from "../modules/card/screen";
import MoreScreen from "../modules/more/screen";
import MyTopTabs from "./HomeTab";


const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 50, marginVertical: 10 },
      }}>


      {/* <Tab.Screen
        name="TopTabs"
        component={MyTopTabs}

      /> */}


      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 11, padding: 0 },
          headerShown: false,
          tabBarIcon: ({ focused }: any) =>
            focused ? (
              <Entypo name="home" size={30} color="purple" />
            ) : (
              <AntDesign name="home" size={30} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          tabBarLabel: "Pay",
          tabBarLabelStyle: { fontSize: 11, padding: 0, },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="send" size={24} color="purple" />
            ) : (
              <Feather name="send" size={24} color="black" />

            ),
        }}
      />


      <Tab.Screen
        name="Invest"
        component={InvestScreen}
        options={{
          tabBarLabel: "Invest",
          tabBarLabelStyle: { fontSize: 11, padding: 0 },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="bar-chart-sharp" size={24} color="purple" />
            ) : (
              <Ionicons name="bar-chart-outline" size={24} color="black" />

            ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={CardScreen}
        options={{
          tabBarLabel: "Card",
          tabBarLabelStyle: { fontSize: 11, padding: 0 },

          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="card" size={24} color="purple" />
            ) : (
              <Ionicons name="card-outline" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: "More",
          tabBarLabelStyle: { fontSize: 11, padding: 0 },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="view-grid" size={24} color="purple" />
            ) : (
              <MaterialCommunityIcons name="view-grid-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
const styles = StyleSheet.create({});
