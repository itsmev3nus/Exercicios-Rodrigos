import React from 'react';
import { Button } from 'react-native'

export default (props: any) => {

    function executar(){
        console.warn('Botão Acionado.')
    }
    return(
    
    <>
    <Button
    title='Executar'
        onPress={executar}
    />
    
    <Button
    title='Executar 2'
    onPress={function(){console.warn('Exec 2')}}
    />

    <Button
    title='Executar 3'
    onPress={function(){console.warn('Exec 3')}}
    />
    </>
    )
}
    