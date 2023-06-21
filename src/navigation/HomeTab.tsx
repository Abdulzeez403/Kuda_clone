import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react"
import SendScreen from '../modules/home/components/spend';
import ApHero from '../modules/home/components/send';
const Tab = createMaterialTopTabNavigator();

const MyTopTabs =()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="hero" component={ApHero}
      options={{
        tabBarLabel: "none"
      }} 
      />
      <Tab.Screen name="send" component={SendScreen} />
    </Tab.Navigator>
  );
}
export default  MyTopTabs;