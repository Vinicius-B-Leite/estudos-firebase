import { StyleSheet, Text, View } from 'react-native';
import Aturh from './src/pages/auth';
import RealTimaDataBase from './src/pages/realTimeDataBase';

export default function App() {
  
  return (
    <Aturh/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
