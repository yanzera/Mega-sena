import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numeros: "00 - 00 - 00 - 00 - 00 - 00",
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.numeros}</Text>
        <Button 
          title='Random Numbers'
          onPress={() => {
            let megasena = [];
            generaterNumber(megasena);
            let texto = megasena.join(' - ');
            console.log(texto);
            this.setState({ 
              numeros: texto
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
);

function generaterNumber(megasena) {
  if (megasena.length >= 6) return;
  let number = Math.floor(Math.random() * (60- 1)) + 1;
  if(megasena.indexOf(number) < 0) {
    megasena.push(number);
  }

  generaterNumber(megasena);
};