import React, {useEffect, useState} from 'react';
import {
  Container,
  QuestionItemContainer,
  QuestionContainer,
  QuestionTitle,
  QuestionItemText,
  QuestionInfoContainer,
  QuestionCount,
  AnswerBtn,
  AnswerBtnContainer,
  FeedBack,
} from './style.js';
import {
  ActivityIndicator,
  Text,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import Bar from '../../components/Bar';
import axios from 'axios';
import * as images from '../../assets';

const Questions = props => {
  const [medium, setMedium] = useState([]);
  const [easy, setEasy] = useState([]);
  const [hard, setHard] = useState([]);
  const [category, setCategory] = useState({});

  const [answer, setAnswer] = useState([]);
  const [newAnswer, setNewAnswer] = useState({});

  const [nextQuestion, setNextQuestion] = useState({});
  const [indexSelected, setIndexSelected] = useState(null);
  const [showFeedBack, setShowFeedBack] = useState(false);
  const [showFeedBackModal, setShowFeedBackModal] = useState(false);

  const nextQuestionError = () => {
    let midQ = [...medium];
    let hardQ = [...hard];
    let easyQ = [...easy];
    if (answer.length > 1) {
      if (
        newAnswer.correct === false &&
        answer[answer.length - 2].correct === false &&
        newAnswer.level === answer[answer.length - 2].level
      ) {
        if (newAnswer.level === 'medium') {
          console.log('mid');
          let indexNextQuestion = Math.floor(Math.random() * easyQ.length);

          let nextQ = easyQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        } else if (newAnswer.level === 'hard') {
          console.log('hard');

          let indexNextQuestion = Math.floor(Math.random() * midQ.length);

          let nextQ = midQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        } else {
          console.log('easy');
          let indexNextQuestion = Math.floor(Math.random() * easyQ.length);

          let nextQ = easyQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        }
      } else {
        if (newAnswer.level === 'easy') {
          let indexNextQuestion = Math.floor(Math.random() * easyQ.length);

          let nextQ = easyQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        } else if (newAnswer.level === 'medium') {
          let indexNextQuestion = Math.floor(Math.random() * midQ.length);

          let nextQ = midQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        } else if (newAnswer.level === 'hard') {
          let indexNextQuestion = Math.floor(Math.random() * hardQ.length);
          console.log('hard1');
          let nextQ = hardQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        }
      }
    } else {
      let indexNextQuestion = Math.floor(Math.random() * midQ.length);

      let nextQ = midQ[indexNextQuestion];

      let nextQuestion = {
        index: indexNextQuestion,
        difficulty: nextQ.difficulty,
        question: nextQ.question,
        correct_answer: nextQ.correct_answer,
        alternatives: shuffle([
          ...nextQ.incorrect_answers,
          nextQ.correct_answer,
        ]),
      };
      setNextQuestion(nextQuestion);
    }
    setShowFeedBack(false);
    setShowFeedBackModal(false);
    setIndexSelected(null);
  };

  const nextQuestionCorrect = () => {
    let midQ = [...medium];
    let hardQ = [...hard];
    let easyQ = [...easy];
    if (answer.length > 1) {
      if (
        newAnswer.correct === true &&
        answer[answer.length - 2].correct === true &&
        newAnswer.level === answer[answer.length - 2].level
      ) {
        if (newAnswer.level === 'easy') {
          let indexNextQuestion = Math.floor(Math.random() * midQ.length);

          let nextQ = midQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        } else if (newAnswer.level === 'medium') {
          let indexNextQuestion = Math.floor(Math.random() * hardQ.length);
          console.log('hard4');

          let nextQ = hardQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        } else {
          let indexNextQuestion = Math.floor(Math.random() * hardQ.length);
          console.log('hard3');

          let nextQ = hardQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        }
      } else {
        if (newAnswer.level === 'easy') {
          let indexNextQuestion = Math.floor(Math.random() * easyQ.length);

          let nextQ = easyQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        } else if (newAnswer.level === 'medium') {
          let indexNextQuestion = Math.floor(Math.random() * midQ.length);

          let nextQ = midQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        } else if (newAnswer.level === 'hard') {
          let indexNextQuestion = Math.floor(Math.random() * hardQ.length);
          console.log('hard2');

          let nextQ = hardQ[indexNextQuestion];

          let nextQuestion = {
            index: indexNextQuestion,
            difficulty: nextQ.difficulty,
            question: nextQ.question,
            correct_answer: nextQ.correct_answer,
            alternatives: shuffle([
              ...nextQ.incorrect_answers,
              nextQ.correct_answer,
            ]),
          };
          setNextQuestion(nextQuestion);
        }
      }
    } else {
      let indexNextQuestion = Math.floor(Math.random() * midQ.length);

      let nextQ = midQ[indexNextQuestion];

      let nextQuestion = {
        index: indexNextQuestion,
        difficulty: nextQ.difficulty,
        question: nextQ.question,
        correct_answer: nextQ.correct_answer,
        alternatives: shuffle([
          ...nextQ.incorrect_answers,
          nextQ.correct_answer,
        ]),
      };
      setNextQuestion(nextQuestion);
    }
    setShowFeedBack(false);
    showFeedBackModal(false);

    setIndexSelected(null);
  };

  const answerQuestion = () => {
    let question = nextQuestion;
    let questionIndex = question.index;
    let questionDifficult = question.difficulty;

    let midQ = [...medium];
    let hardQ = [...hard];
    let easyQ = [...easy];
    if (questionDifficult === 'hard') {
      hardQ.splice(questionIndex, 1);
      setHard(hardQ);
    } else if (questionDifficult === 'easy') {
      easyQ.splice(questionIndex, 1);
      setEasy(easyQ);
    } else {
      midQ.splice(questionIndex, 1);
      setMedium(midQ);
    }
    //Logica para pegar próxima questão
    if (question.alternatives[indexSelected] === question.correct_answer) {
      console.log('SE ACERTOU');
      let newAnswer = {
        level: questionDifficult,
        correct: true,
        question: question,
      };
      let currentAnswer = [...answer];
      currentAnswer.push(newAnswer);
      setAnswer(currentAnswer);
      setNewAnswer(newAnswer);
      setShowFeedBack(true);
      setShowFeedBackModal(true);
      hideModal();

      // nextQuestionCorrect(newAnswer, currentAnswer);
    } else {
      console.log('ERROU');
      let newAnswer = {
        level: questionDifficult,
        correct: false,
        question: question,
      };
      let currentAnswer = [...answer];
      currentAnswer.push(newAnswer);
      setAnswer(currentAnswer);
      setNewAnswer(newAnswer);
      setShowFeedBack(true);
      setShowFeedBackModal(true);
      hideModal();
      // nextQuestionError(newAnswer, currentAnswer);
    }

    //FIM Logica para pegar próxima questão
  };

  useEffect(async () => {
    console.log(props);
    console.log('use effect');
    const category = props.navigation.state.params.category;
    setCategory(category);

    const easyQ = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category.id}&difficulty=easy&type=multiple`,
    );
    const mediumQ = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category.id}&difficulty=medium&type=multiple`,
    );
    const hardQ = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category.id}&difficulty=hard&type=multiple`,
    );

    let indexFirstQuestion = Math.floor(
      Math.random() * mediumQ.data.results.length,
    );
    console.log(mediumQ.data.results);
    let firstQuestion = mediumQ.data.results[indexFirstQuestion];

    let nextQuestion = {
      index: indexFirstQuestion,
      difficulty: firstQuestion.difficulty,
      question: firstQuestion.question,
      correct_answer: firstQuestion.correct_answer,
      alternatives: shuffle([
        ...firstQuestion.incorrect_answers,
        firstQuestion.correct_answer,
      ]),
    };

    setNextQuestion(nextQuestion);
    setEasy(easyQ.data.results);
    setMedium(mediumQ.data.results);
    setHard(hardQ.data.results);
  }, []);

  shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const hideModal = () => {
    setTimeout(function() {
      setShowFeedBackModal(false);
    }, 2000);
  };

  return (
    <Container>
      <Bar title={category.name} />
      <Modal transparent visible={showFeedBackModal}>
        <FeedBack
          style={{flex: 1}}
          onPressIn={() => setShowFeedBackModal(false)}
          onPressOut={() => setShowFeedBackModal(false)}
          onPress={() => setShowFeedBackModal(false)}>
          <Image source={newAnswer.correct ? images.CORRECT : images.ERROR} />
        </FeedBack>
      </Modal>

      <QuestionInfoContainer>
        <QuestionCount>Questão {answer.length + 1}</QuestionCount>
      </QuestionInfoContainer>
      <QuestionTitle>{nextQuestion.question}</QuestionTitle>
      <Text>{nextQuestion.difficulty}</Text>
      <QuestionContainer>
        {nextQuestion &&
          nextQuestion.alternatives &&
          nextQuestion.alternatives.map((alternative, index) => (
            <QuestionItemContainer
              boderColor={indexSelected === index ? '#5D40FF' : '#fff'}
              onPress={() => setIndexSelected(index)}>
              <QuestionItemText>{alternative}</QuestionItemText>
            </QuestionItemContainer>
          ))}
        {indexSelected !== null ? (
          showFeedBack ? (
            <AnswerBtnContainer
              onPress={() =>
                answer.correct ? nextQuestionCorrect() : nextQuestionError()
              }>
              <AnswerBtn source={images.NEXT_BTN} />
            </AnswerBtnContainer>
          ) : (
            <AnswerBtnContainer onPress={() => answerQuestion()}>
              <AnswerBtn source={images.ANSWER_BTN} />
            </AnswerBtnContainer>
          )
        ) : null}
      </QuestionContainer>
    </Container>
  );
};
export default Questions;
