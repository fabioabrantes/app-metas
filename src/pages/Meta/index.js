import React, {useCallback, useState} from 'react';

import {
  Container,
  TitleList,
  ListMetas,
  ItemMetas,
  TitleItem,
  DescItem,
  LoadingArea,
} from './styles';

import api from '../../config/api';
import {useFocusEffect} from '@react-navigation/native';
import {Alert, ActivityIndicator} from 'react-native';

const Meta = () => {
  const [metas, setMetas] = useState('');
  const [loading, setLoading] = useState(false);

  const getMetas = async () => {
    setLoading(true);
    try {
      const response = await api.get('/metas');
      setLoading(false);
      setMetas(response.data.metas);
    } catch (error) {
      Alert.alert('', 'Error: Nenhuma meta encontrada.tente mais tarde');
    }
  };
  useFocusEffect(
    useCallback(() => {
      getMetas();
    }, []),
  );

  return (
    <Container>
      <TitleList>listar </TitleList>
      {loading ? (
        <LoadingArea>
          <ActivityIndicator size="large" color="#fff" />
        </LoadingArea>
      ) : (
        <ListMetas
          data={metas}
          renderItem={({item}) => (
            <ItemMetas>
              <TitleItem>{item.name}</TitleItem>
              <DescItem>{item.description}</DescItem>
              <DescItem>{item.status}</DescItem>
            </ItemMetas>
          )}
          keyExtractor={(meta) => String(meta._id)}
        />
      )}
    </Container>
  );
};

export default Meta;
