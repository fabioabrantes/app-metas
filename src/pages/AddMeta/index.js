import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  TitleInput,
  InputForm,
  BtnSubmitForm,
  TxtSubmitForm,
  TitleRequired,
  LoadingArea,
} from './styles';
import {ActivityIndicator, Alert} from 'react-native';

import api from '../../config/api';

const AddMeta = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const cadastrar = async () => {
    setLoading(true);
    try {
      const data = {
        name,
        description,
        status,
      };
      const res = await api.post('/metas', data);
      Alert.alert('', res.data.message);
      setLoading(false);
    } catch (error) {
      if (error.response) {
        Alert.alert('', res.data.message);
      } else {
        Alert.alert(
          '',
          'Erro: Meta não cadastrada com sucesso, tente mais tarde!',
        );
      }
      setLoading(false);
    }
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Container>
        <TitleInput>* Nome: </TitleInput>
        <InputForm
          placeholder="Nome da meta"
          autoCorrect={false} // não permite que corrija
          value={name}
          editable={!loading} // permite somente quando for diferente de true
          onChangeText={(text) => setName(text)}
        />

        <TitleInput>* Descrição: </TitleInput>
        <InputForm
          placeholder="Descrição da meta"
          autoCorrect={false}
          value={description}
          editable={!loading}
          onChangeText={(text) => setDescription(text)}
        />

        <TitleInput>* Status: </TitleInput>
        <InputForm
          placeholder="Status da meta"
          autoCorrect={false}
          value={status}
          editable={!loading}
          onChangeText={(text) => setStatus(text)}
        />

        <TitleRequired>* Campo Obrigatório</TitleRequired>

        <BtnSubmitForm disabled={loading} onPress={cadastrar}>
          <TxtSubmitForm>Cadastrar</TxtSubmitForm>
        </BtnSubmitForm>

        {loading && (
          <LoadingArea>
            <ActivityIndicator size="large" color="#fff" />
          </LoadingArea>
        )}
      </Container>
    </ScrollView>
  );
};

export default AddMeta;
