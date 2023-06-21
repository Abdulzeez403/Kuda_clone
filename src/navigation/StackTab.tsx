
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../modules/auth/signIn";
import HomeScreen from "../modules/home/screen";
import MainTab from "./MainTab";
import PayScreen from "../modules/pay/screen";
import InvestScreen from "../modules/invest/screen";
import CardScreen from "../modules/card/screen";
import MoreScreen from "../modules/more/screen";
import SendScreen from "../modules/home/components/spend";
import MyTopTabs from "./HomeTab";

const Stack = createNativeStackNavigator();

const StackTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* <Stack.Screen
          name="Login"
          component={SignInScreen}
          options={{ headerShown: false }}
        /> */}




        <Stack.Screen
          name="Main"
          component={MainTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MyTopTabs"
          component={MyTopTabs}
          // options={{ headerShown: false }}
        />


        <Stack.Screen
          name="Send"
          component={SendScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="Pay"
          component={PayScreen}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="Invest"
          component={InvestScreen}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="More"
          component={MoreScreen}
          options={{ headerShown: false }}

        />





        {/* //         <Stack.Screen name="Places" component={PlacesScreen} /> */}



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackTab;
