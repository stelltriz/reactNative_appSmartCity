import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'
import { FormularioAmbienteEquipamento } from '../componentes/FormularioAmbienteEquipamento'
import { ListaAmbienteEquipamento } from "../componentes/ListaAmbienteEquipamento"
import uuid from 'react-native-uuid'


export const AmbientesEquipamentos = () => { 

    const [ambientesEquipamentos, setAmbientesEquipamentos] = useState([])

    const adicionarAmbienteEquipamento = (descricao, 
                                          statusOperacional, 
                                          instrucoesSeguranca, 
                                          contatoResponsavel,
                                          latitude,
                                          longitude) => {

        let novoAmbienteEquipamento = {
            codigo: uuid.v4(),
            descricao: descricao,
            statusOperacional: statusOperacional,
            instrucoesSeguranca: instrucoesSeguranca,
            contatoResponsavel: contatoResponsavel,
            latitude: latitude,
            longitude: longitude
        } 

        setAmbientesEquipamentos([...ambientesEquipamentos, novoAmbienteEquipamento])
    }


    const removerAmbienteEquipamento = (codigo) => {

        setAmbientesEquipamentos( ambientesEquipamentos.filter(
            ambienteEquipamento => ambienteEquipamento.codigo !== codigo
        ) )
    }

    return(
        <View style={estilos.conteiner}>

            <Cabecalho 
                titulo="Cadastro de ambientes ou equipamentos"
            />

            <FormularioAmbienteEquipamento 
                adicionar={adicionarAmbienteEquipamento}
            />  

            <ListaAmbienteEquipamento 
                colecao={ambientesEquipamentos}
                remover={removerAmbienteEquipamento}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: '#080a0c'
    },
  });