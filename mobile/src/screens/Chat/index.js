import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import Fire from '../../services/Fire';

import { Container } from './styles';

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([]);

  const user = {
    name: navigation.getParam('name'),
    _id: Fire.shared.uid,
  };

  useEffect(() => {
    Fire.shared.on(message => setMessages(messages => [message, ...messages]));

    return () => {
      Fire.shared.off();
    };
  }, []);

  return (
    <Container>
      <GiftedChat messages={messages} onSend={Fire.shared.send} user={user} />
      {Platform.OS === 'android' && (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} />
      )}
    </Container>
  );
}

Chat.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('name'),
});
