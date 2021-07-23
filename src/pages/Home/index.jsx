import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Container, CardContainer } from './style';
import { api } from '../../services/api';

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get('/character')
      .then(response => setCharacters(response.data.results));
  }, []);

  return (
    <Container>
      {characters &&
        characters.map(character => (
          <CardContainer>
            <Card key={character.id} character={character} />
          </CardContainer>
        ))}
    </Container>
  );
};
