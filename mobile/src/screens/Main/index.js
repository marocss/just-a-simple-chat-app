import React, { useState } from 'react';

import { Container, Label, Input, Button, ButtonText } from './styles';

export default function Main({ navigation }) {
  const [name, setName] = useState('');

  function handleProsseguir() {
    navigation.navigate('Chat', { name });
    setName('');
  }

  return (
    <Container>
      <Label>Digite seu nome:</Label>
      <Input
        value={name}
        onChangeText={setName}
        autoCorrect={false}
        placeholder="Nome"
        autoFocus
      />
      <Button onPress={handleProsseguir}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}

Main.navigationOptions = {
  headerTitle: 'Just A Simple Chat App',
};
