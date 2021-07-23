import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Container, Content } from './style';
import { api } from '../../services/api';
import { Header } from '../../components/Header';

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get('/character')
      .then(response => setCharacters(response.data.results));
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {characters &&
          characters.map(character => (
            <Link to={`/${character.id}`} key={character.id}>
              <Card character={character} />
            </Link>
          ))}
      </Content>
    </Container>
  );
};
