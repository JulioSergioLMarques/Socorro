import React from "react";
import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pesquisa from './Telas/Teladepesquisa';
import Transacao from './Telas/Teladetransacao';
import Botao from "./Telas/Botao.js"

export default class App extends Component() {
  render(){
  return (
    <View style={styles.container}>
      <Botao></Botao>
      <Text>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAA socorro
      </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
