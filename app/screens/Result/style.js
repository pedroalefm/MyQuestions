import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;
export const Congratz = styled.Image`
  align-self: center;
  margin-top: 20%;
`;

export const ContainerGeneralResult = styled.View`
  width: 199px;
  height: 57px;
  border-radius: 10px;
  background-color: rgba(52, 60, 88, 0.08);
  align-self: center;
  flex-direction: row;
  margin-top: 20%;
`;
export const TextContainerCorrect = styled.View`
  position: absolute;
  left: 12;
  align-items: center;
`;
export const TextContainerError = styled.View`
  position: absolute;
  right: 12;
  align-items: center;
`;

export const TextGeneralNumber = styled.Text`
  color: #343c58;
  font-size: 28px;
  font-weight: bold;
`;
export const TextGeneral = styled.Text`
  color: #343c58;
  font-size: 13px;
  font-weight: normal;
`;

export const ContainerResultDetail = styled.View`
  width: 283px;
  align-self: center;
  height: 54px;
  flex-direction: row;
  margin-top: 15%;
  align-items: center;
  justify-content: center;
`;
export const ContainerResultItem = styled.View`
  width: 68px;
  height: 54px;
  margin: 5px;
`;
export const TextResultTitle = styled.Text`
  color: #343c58;
  font-weight: bold;
  font-size: 14px;
`;
export const TextResult = styled.Text`
  color: #343c58;
  font-weight: normal;
  font-size: 14px;
`;

export const Line = styled.Image`
  margin: 5px;
`;

export const BackBtn = styled.TouchableOpacity`
  align-self: center;
  position: absolute;
  bottom: 10;
`;
export const BackBtnImg = styled.Image``;
