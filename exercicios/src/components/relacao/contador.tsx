import React from "react";
import { Button, Text } from "react-native";
import Padrao from "../../estilos/Padrao";

export default (props: any) => {
    return (
        <>
            <Text style={Padrao.textoGrande}> numero </Text>
            <Button title='+'/>
            <Button title='-'/> 
        </>
    );
}