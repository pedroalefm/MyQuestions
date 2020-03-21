import React, {useEffect, useState} from 'react';
import {
  Container,
  Congratz,
  ContainerGeneralResult,
  TextGeneral,
  TextGeneralNumber,
  TextContainerCorrect,
  TextContainerError,
  ContainerResultDetail,
  ContainerResultItem,
  TextResultTitle,
  TextResult,
  Line,
  BackBtn,
  BackBtnImg,
} from './style';
import * as images from '../../assets';
import Bar from '../../components/Bar';
import {withNavigation} from 'react-navigation';

const Result = props => {
  const [category, setCategory] = useState({});
  const [erros, setErros] = useState(null);
  const [correct, setCorrect] = useState(null);

  const [easyCorrect, setEasyCorrect] = useState(null);
  const [easyError, setEasyError] = useState(null);

  const [mediumCorrect, setMediumCorrect] = useState(null);
  const [mediumError, setMediumError] = useState(null);

  const [hardCorrect, setHardCorrect] = useState(null);
  const [hardError, setHardError] = useState(null);

  useEffect(async () => {
    const category = props.navigation.state.params.category;
    const answers = props.navigation.state.params.answer;

    setCategory(category);

    let countError = 0;
    let countCorrect = 0;
    let countErrorMid = 0;
    let countCorrectMid = 0;
    let countErrorEasy = 0;
    let countCorrectEasy = 0;
    let countErrorHard = 0;
    let countCorrectHard = 0;

    answers.map(answer => {
      if (answer.level === 'medium') {
        if (answer.correct) {
          countCorrect++;
          countCorrectMid++;
        } else {
          countError++;
          countErrorMid++;
        }
      } else if (answer.level === 'easy') {
        if (answer.correct) {
          countCorrect++;
          countCorrectEasy++;
        } else {
          countErrorEasy++;
          countError++;
        }
      } else {
        if (answer.correct) {
          countCorrectHard++;
          countCorrect++;
        } else {
          countErrorHard++;
          countError++;
        }
      }
    });
    setErros(countError);
    setCorrect(countCorrect);
    setEasyCorrect(countCorrectEasy);
    setHardCorrect(countCorrectHard);
    setMediumCorrect(countCorrectMid);
    setHardError(countErrorHard);
    setEasyError(countErrorEasy);
    setMediumError(countErrorMid);
  }, []);
  return (
    <Container>
      <Bar title={category.name} />

      <Congratz source={images.CONGRATZ} />
      <ContainerGeneralResult>
        <TextContainerCorrect>
          <TextGeneralNumber>{correct}</TextGeneralNumber>
          <TextGeneral>acertos</TextGeneral>
        </TextContainerCorrect>
        <TextContainerError>
          <TextGeneralNumber>{erros}</TextGeneralNumber>
          <TextGeneral>acertos</TextGeneral>
        </TextContainerError>
      </ContainerGeneralResult>
      <ContainerResultDetail>
        <ContainerResultItem>
          <TextResultTitle>Easy</TextResultTitle>
          <TextResult>Correct: {easyCorrect}</TextResult>
          <TextResult>Error: {easyError}</TextResult>
        </ContainerResultItem>
        <Line source={images.LINE} />
        <ContainerResultItem>
          <TextResultTitle>Medium</TextResultTitle>
          <TextResult>Correct: {mediumCorrect}</TextResult>
          <TextResult>Error: {mediumError}</TextResult>
        </ContainerResultItem>
        <Line source={images.LINE} />
        <ContainerResultItem>
          <TextResultTitle>Hard</TextResultTitle>
          <TextResult>Correct: {hardCorrect} </TextResult>
          <TextResult>Error: {hardError}</TextResult>
        </ContainerResultItem>
      </ContainerResultDetail>
      <BackBtn onPress={() => props.navigation.navigate('CategoryScreen')}>
        <BackBtnImg source={images.GO_TO_HOME} />
      </BackBtn>
    </Container>
  );
};
export default withNavigation(Result);
