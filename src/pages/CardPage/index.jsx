import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Text, TextContent, Bold } from './style';
import { api } from '../../services/api';

export const CardPage = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.get(`/character/${id}`).then(response => setCharacter(response.data));
  }, []);

  return (
    <Container>
      <div>
        <img src={character.image} alt={character.name} />
        <TextContent>
          <Text>
            <Bold>Name:</Bold> {character.name}
          </Text>
          <Text>
            <Bold>Status:</Bold> {character.status}
          </Text>
          <Text>
            <Bold>Species:</Bold> {character.species}
          </Text>
          <Text>
            <Bold>Gender:</Bold> {character.gender}
          </Text>
        </TextContent>
      </div>
    </Container>
  );
};
