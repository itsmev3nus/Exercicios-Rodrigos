import React from "react";
import Membro from "./Membro";
import { Text } from "react-native";

export default (props: any) => (
    <>
        <Text>Membros da Familia</Text>
        {props.children}
    </>
)

