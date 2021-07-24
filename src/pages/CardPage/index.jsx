import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from './style';
import { api } from '../../services/api';

export const CardPage = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.get(`/character/${id}`).then(response => setCharacter(response.data));
  }, []);

  return (
    <>
      <Text>{character.name}</Text>
      <Text>{character.status}</Text>
      <Text>{character.species}</Text>
      <Text>{character.gender}</Text>
      <img src={character.image} alt={character.name} />
      <Text>{}</Text>
    </>
  );
};
