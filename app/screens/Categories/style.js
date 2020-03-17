import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const Title = styled.Text`
  font-family: Avenir;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #343c58;
  position: absolute;
  width: 102px;
  height: 27px;
  left: 24px;
  top: 80px;
`;

export const ButtonContainer = styled.ScrollView`
  align-self: center;
  margin-top: 150;
  margin-bottom: 20;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 272px;
  height: 44px;
  justify-content: center;
  align-self: center;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  color: #78809a;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;
