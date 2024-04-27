import React from "react";
import { Text } from "react-native";
import Padrao from "../../estilos/Padrao";

export default (props: any) => (
        <Text key={props.chave} style={Padrao.textoGrande}>{props.nome} {props.sobreNome}</Text>
)