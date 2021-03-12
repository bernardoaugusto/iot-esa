import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function App() {
  const [on, setOn] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabalho Final de IoT</Text>
      {
        on ? <>
        <MaterialCommunityIcons name="lightbulb-on" size={250} color="black" onPress={() => setOn(false)} />
        <Text>Pressione para desligar a lâmpada</Text>
        </> : <>
        <MaterialCommunityIcons name="lightbulb-on-outline" size={250} color="black" onPress={() => setOn(true)} />
        <Text>Pressione para ligar a lâmpada</Text>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40
  },
});
