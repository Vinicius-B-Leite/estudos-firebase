import React, { useState } from 'react';
import { Button, StatusBar, TextInput, View } from 'react-native';
import firebase from '../../firebaseConecction'


export default function Aturh() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const logar = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, senha   )
        .then(r => {
            alert("Entrou")
        }).catch( (error) => {
            alert(error, 'Nao entrou')
        })
    }
    const deslogar = async () => {
        await firebase.auth().signOut()
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <StatusBar />
            <TextInput style={{margin: 20, borderWidth: 1, borderColor: '#000' }} placeholder="Digite seu email" value={email} onChangeText={txt => setEmail(txt)} />
            <TextInput style={{margin: 20, borderWidth: 1, borderColor: '#000' }} placeholder="Digite seu email" value={senha} onChangeText={txt => setSenha(txt)} />
            <Button title='Login' onPress={logar}/>
            <Button title='Delogar' onPress={deslogar}/>
        </View>
    );
}