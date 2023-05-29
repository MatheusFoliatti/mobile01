import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  const [text, setText] = useState("")

  useEffect(() => {
    //setText('Hello World!')
    console.log("Sofreu Alteração");
  }, [text])

  function handleButton () {
    setText('test10')
  }

  return (
    <View style={styles.container}>
      <Text>PEREBA</Text>
      <TouchableOpacity style={styles.button} onPress={handleButton} > 
        <Text style={ { fontSize: 16 } }>Button</Text>  
      </TouchableOpacity>
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
  },
  button: {
    backgroundColor:'#f3f3',
    width: 100,
    height: 30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
  }
});
