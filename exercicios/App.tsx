import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Simples from "./src/components/Simples";
import Membro from "./src/components/relacao/Membro";
import Familia from "./src/components/relacao/Familia";
import Padrao from "./src/estilos/Padrao";




// retorna tag membros para não ter q repetir inteira no código
/*function teste(PrimeiroNome : string, SegundoNome : string){
    return <Membro nome={PrimeiroNome} sobreNome={SegundoNome}/>
}
*/

function Mostrarpessoas(primeiroNomeSegundoNome: string[]): JSX.Element[] {  
  let pessoas: JSX.Element[] = [];

  let chave = 0;
  let indice = 0;
  for(let i=0;i<primeiroNomeSegundoNome.length; i=i+2){
    pessoas.push(<Membro key={chave++} 
      nome={primeiroNomeSegundoNome[i]} 
    	sobreNome={primeiroNomeSegundoNome[i+1]} />)
  }

  return pessoas; 
}


export default class App extends Component {
  render(){
    return (
      <View style={estilos.container}>{
        /*<Text style={estilos.fonte}>Olá mundo</Text>
          <Simples valor="Programando em react-native"/>*/
          }
      
        {
        /*<Frag titulo="Titulo" 
            subTitulo="sub Titulo"  />*/
            }
              
        {
        /*<Parimpar numero={10} />*/
        }
            <Familia>
             {/* {teste("Alex", "F")}
              {teste("Talles", "F")}
              {teste("Julia", "F")}
      */}

              {Mostrarpessoas(["Alex ", "F ", "Leticia ", " F"])}

            </Familia>

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


