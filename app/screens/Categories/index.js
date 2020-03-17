import React, {useEffect, useState} from 'react';
import {
  Container,
  Title,
  Button,
  ButtonText,
  ButtonContainer,
} from './style.js';
import {ActivityIndicator} from 'react-native';
import Bar from '../../components/Bar';
import axios from 'axios';

const Categories = props => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get('https://opentdb.com/api_category.php');
    setCategories(res.data.trivia_categories);
    setLoading(false);
  }, []);

  return (
    <Container>
      <Bar title="MyQuestions" />
      <Title>Categorias</Title>
      {loading && (
        <ActivityIndicator
          size="large"
          style={{
            color: '#343c58',
            position: 'absolute',
            top: 120,
            alignSelf: 'center',
          }}
        />
      )}
      <ButtonContainer>
        {categories.map(category => (
          <Button>
            <ButtonText>{category.name}</ButtonText>
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
};
export default Categories;
