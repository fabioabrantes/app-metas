import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Btn = styled.TouchableOpacity`
  background-color: #171941;
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const BtnText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;
