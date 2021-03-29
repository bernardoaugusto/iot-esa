import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import axios from 'axios';

const url = `adafruit url`;
const headers = {
  'X-AIO-Key': 'adafruit key',
}

export default function App() {
  const [on, setOn] = useState('OFF')

  const getValue = async (): Promise<void> => {
    try {
      const response = await axios.get<[{value: 'ON' | 'OFF'}]>(url, {
          headers
      });

      console.log(response.data[0].value)
      setOn(response.data[0].value);
    } catch (error) {
        console.log(error)
    }
  }

  const setValue = async (value: 'ON' | 'OFF'): Promise<void> => {
    try {
      const response = await axios.post<{value: 'ON' | 'OFF'}>(url, {value},{
        headers
      });
      
      console.log(response.data.value)
      setOn(response.data.value);
    } catch (error) {
        console.log(error)
    }
  }



  getValue()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabalho Final de IoT</Text>
      {
        on === 'ON' ? <>
        <MaterialCommunityIcons name="lightbulb-on" size={250} color="black" onPress={() => setValue('OFF')} />
        <Text>Pressione para desligar a lâmpada</Text>
        </> : <>
        <MaterialCommunityIcons name="lightbulb-on-outline" size={250} color="black" onPress={() => setValue('ON')} />
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
