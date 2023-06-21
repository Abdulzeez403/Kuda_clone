import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackTab from './src/navigation/StackTab';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <StackTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
