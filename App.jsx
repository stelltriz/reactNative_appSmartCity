import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { RotasStack } from './src/rotas/RotasStack'

// Criação do componente JSX
export default function App() {

  // Estrutura
  return (
    <View style={styles.conteiner}>
      <StatusBar barStyle='light-content' />
      <RotasStack />
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  conteiner: {
    flex: 1
  }
});

