import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Container, Content } from './style';
import { getCharacters } from '../../services/characters';
import { Header } from '../../components/Header';

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = () => {
    getCharacters()
      .then(data => setCharacters(data))
      .catch(() => {});
  };

  useEffect(() => {
    getAllCharacters();
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
