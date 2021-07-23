import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Container, CardContainer, Content } from './style';
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
      <Content>
        {characters &&
          characters.map(character => (
            <CardContainer>
              <Card key={character.id} character={character} />
            </CardContainer>
          ))}
      </Content>
    </Container>
  );
};
