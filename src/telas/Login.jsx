import {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export const Login = () => { 
  
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const navigation = useNavigation()

    function abrirInicial(){
        navigation.navigate('rotasTab')
    }

    return(
        <View style={estilos.conteiner}>
           
           <TextInput
                style={estilos.campo}
                placeholder='Usuário' 
                placeholderTextColor='#e1e5f2'
                onChangeText={setUsuario}
                value={usuario}
            />
            <TextInput 
                style={estilos.campo}
                placeholder='Senha'
                placeholderTextColor='#e1e5f2'
                keyboardType='default'
                onChangeText={setSenha}
                value={senha}      
            />    

            <TouchableOpacity 
                style={estilos.botao} 
                onPress={abrirInicial}
            >
                <Text style={estilos.textoBotao}>Entrar</Text>
            </TouchableOpacity>                  

            <TouchableOpacity style={estilos.cadastro} >
                <Text style={estilos.textoCadastro}>Cadastre-se</Text>
            </TouchableOpacity>  
            
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    campo: {
        height: 50,
        width: 300,
        backgroundColor: '#4f030a',
        color: '#fff',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        height: 50,
        width: 300,   
        backgroundColor: '#4f030a',       
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,    
        marginVertical: 20,  
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    },
    cadastro: {
        width: 300,
        alignItems: 'flex-end'
    },
    textoCadastro: {
        color: '#fff',
        fontSize: 16,
    },
})