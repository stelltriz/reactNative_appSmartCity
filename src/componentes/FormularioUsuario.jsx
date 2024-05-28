import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'


export const FormularioUsuario = ({adicionar}) => { 

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerCampos}>
                <TextInput
                    style={estilos.campo}
                    placeholder='Nome' 
                    placeholderTextColor='#01233c'
                    onChangeText={setNome}
                    value={nome}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Email'
                    placeholderTextColor='#01233c'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}      
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Telefone'
                    placeholderTextColor='#01233c'
                    keyboardType='phone-pad'                
                    onChangeText={setTelefone}
                    value={telefone}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Usuário'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setUsuario}
                    value={usuario}
                />      
                <TextInput 
                    style={estilos.campo}
                    placeholder='Senha'
                    placeholderTextColor='#01233c'
                    keyboardType='phone-pad'                
                    onChangeText={setSenha}
                    value={senha}
                />                          
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={ () => adicionar(nome, email, telefone, usuario, senha) }
            >
                <Text>
                    <Feather 
                        name="user-plus" 
                        size={24} 
                        color='#dee2e6' 
                    />  
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
    },
    conteinerCampos: {
        flex: 1,
    },
    campo: {
        height: 50,
        backgroundColor: '#dee2e6',
        color: '#01233c',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        width: 60,
        height: 290,
        marginStart: 10,
        backgroundColor: '#4f030a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
  });