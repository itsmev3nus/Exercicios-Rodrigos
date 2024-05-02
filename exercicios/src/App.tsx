import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Simples from "./components/Simples";
import Membro from "./components/relacao/Membro";
import Familia from "./components/relacao/Familia";
import Padrao from "./estilos/Padrao";
import Familiajson from "./components/relacao/familiajson";
import Usuariologado from "./components/relacao/Usuariologado";
import Botao from "./components/Botao";
import Contador from "./components/relacao/contador";

const Familia1 = [
  {"nome" : "Julia", "sobreNome" : "..."},
  {"nome" : "Alex", "sobreNome" : "..."}
  
]
// retorna tag membros para não ter q repetir inteira no código
/*function teste(PrimeiroNome : string, SegundoNome : string){
    return <Membro nome={PrimeiroNome} sobreNome={SegundoNome}/>
}
*/

/*function Mostrarpessoas(primeiroNomeSegundoNome: string[]): JSX.Element[] {  
  let pessoas: JSX.Element[] = [];

  let chave = 0;
  let indice = 0;
  for(let i=0;i<primeiroNomeSegundoNome.length; i=i+2){
    pessoas.push(<Membro key={chave++} 
      nome={primeiroNomeSegundoNome[i]} 
    	sobreNome={primeiroNomeSegundoNome[i+1]} />)
  }

  return pessoas; 
}*/

export default class App extends Component {
  render(){
    return (
      <View style={estilos.container}>

      {/* <Familiajson membros={Familia1} />
        <Usuariologado usuario={{nome= 'teste', email: ' teste@teste.com'}/> 
     <Botao />
     */}
     <Contador />
      </View>
      
    );
  }
}

const estilos= StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  fonte: {
    fontSize: 40,
  }
})


