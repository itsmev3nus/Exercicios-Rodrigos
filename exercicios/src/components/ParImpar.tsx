import React from "react";
import { Text } from "react-native";
import Padrao from "../estilos/Padrao";

function getResultado(numero: number){
    return numero % 2 == 0 ? 'Par!' :'Ímpar!';
}

export default (props: any) => (
            <Text style={Padrao.ex}>{getResultado(props.numero)}</Text>
)