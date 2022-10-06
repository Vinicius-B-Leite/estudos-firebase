import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../../firebaseConecction'
import { useEffect, useState } from 'react';

export default function RealTimaDataBase() {
  const [nome, setNome] = useState('vini')

  const olheiroRealTime = async () => {
    await firebase.database().ref('usuarios/1/').on('value', (snapshot)=>{
      setNome(snapshot.val().nome)
    })
  }
  const getDataUmaVez = async () => {
    await firebase.database().ref('nome').once('value', (snapshot) => {
      setNome(snapshot.val())
    })
  }
  const criarNo = async () => {
    await firebase.database().ref('tipo').set('cliente')
    // criar chave aleatoria
    // const users = await firebase.database().ref('usuarios')
    // let chave = users.push().key
    // users.child(chave).set({dados})
  }
  const removerNo = async () => {
    await firebase.database().ref('tipo').remove()
  }
  const addNo = async () => {
    await firebase.database().ref('usuarios').child(3).set({
      nome: 'Julio',
      idade: 50
    })
  }
  const update = async () => {
    await firebase.database().ref('usuarios').child(3).update({
      nome: 'VIIIII'
    })
  }
  useEffect(() => {
    //update()
  }, [])
  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
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
});
