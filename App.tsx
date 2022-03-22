import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Item from './components/item';
import Quadro from './components/quadro';
import Draggable from './util/draggable';

export default function App() {
  return (
    <View style={styles.container}>
      <Draggable />  
      <Quadro></Quadro> 
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
  }
});
