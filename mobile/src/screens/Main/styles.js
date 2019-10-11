import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* width: 300px; */
  margin-left: 30px;
  margin-top: 100px;
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  /* border: 1px; */
  /* height: 30px; */
  padding: 3px;
  font-size: 45px;
  width: 250px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #222;
  height: 42px;
  width: 150px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
