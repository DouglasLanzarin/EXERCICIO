import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

class App extends Component{

  state = {
    texto: 'SEGURE PRECIONADO',
    tela1: false,
    letras1: false
    
  }

  funcaoconcluida = () => {
    let {letras1} = this.state;
    this.setState({letras1:!letras1})
    this.setState({letras1:true})
    this.setState({texto:'FUNCIONOU'});    
    
  }

  alteracorfundo = () => {
    let {tela1} = this.state;
    this.setState({tela1:!tela1})

  }

  render(){
    let {texto} = this.state;
    let {tela1} = this.state;
    let {letras1} = this.state;

    return(
      <View style={[styles.tela,  (tela1 ? styles.tela1 : {})]}> 
        <Text onPress={this.alteracorfundo} onLongPress={this.funcaoconcluida} style={[styles.letras,(letras1 ? styles.letras1 : {})]}>{texto}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  tela1:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  letras: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  letras1: {
    textAlign: 'center',
    color: 'yellow',
    fontSize: 20
  }
})

export default App;