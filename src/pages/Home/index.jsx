import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Container, Content } from './style';
import { getCharacters } from '../../services/characters';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { api } from '../../services/api';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);

  const getAllCharacters = () => {
    getCharacters()
      .then(data => setCharacters(data))
      .catch(() => {});
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    api
      .get('/character', {
        params: {
          name: searchedCharacters,
        },
      })
      .then(response => setCharacters(response.data.results));
  }, [searchedCharacters]);

  return (
    <Container>
      <Header />
      <SearchBar
        searchedCharacters={searchedCharacters}
        setSearchedCharacters={setSearchedCharacters}
      />
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
