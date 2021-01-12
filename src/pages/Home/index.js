import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Btn, BtnText} from './styles';

const Home = () => {
  const navigation = useNavigation();

  const Meta = () => {
    navigation.navigate('Meta');
  };
  const AddMeta = () => {
    navigation.navigate('AddMeta');
  };

  return (
    <Container>
      <Btn onPress={Meta}>
        <BtnText> Listar Metas</BtnText>
      </Btn>
      <Btn>
        <BtnText onPress={AddMeta}> Cadastrar Metas</BtnText>
      </Btn>
    </Container>
  );
};

export default Home;
