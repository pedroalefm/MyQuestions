import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const QuestionInfoContainer = styled.View`
    margin-top: 20%
    flex-direction: row;
`;

export const QuestionCount = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #343c58;
  align-self: center;
  position: absolute;
  left: 10;
`;

export const QuestionTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #000000;
  margin-top: 5%;
  margin-left: 10;
`;

export const QuestionContainer = styled.ScrollView`
  margin-top: 10%;
  margin-bottom: 10;
`;

export const QuestionItemContainer = styled.TouchableOpacity`
  background: #ffffff;
  border: 1px solid #e4e4e6;
  border-radius: 8px;
  width: 95%;
  height: 110px;
  align-self: center;
  margin-top: 10px;
  border-color: ${props => props.boderColor};
`;

export const QuestionItemText = styled.Text`
  color: #000000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  position: absolute;
  left: 19px;
  right: 13px;
  top: 19px;
  bottom: 41px;
`;

export const AnswerBtnContainer = styled.TouchableOpacity`
  align-self: center;
  margin-top: 5px;
`;
export const AnswerBtn = styled.Image`
  align-self: center;
`;

export const FeedBack = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
