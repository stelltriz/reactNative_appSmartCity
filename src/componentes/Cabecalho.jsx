import { StyleSheet, View, Text } from 'react-native'


export const Cabecalho = ({titulo, subtitulo}) => {
  return (
    <View style={estilos.conteiner}>
      <Text style={estilos.texto}>{titulo}</Text>
      { subtitulo ? <Text style={estilos.texto}>{subtitulo}</Text> : null}
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    backgroundColor: '#4f030a',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%'
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center',
  }
});

