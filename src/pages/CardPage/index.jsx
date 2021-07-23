import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export const CardPage = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.get(`/character/${id}`).then(response => setCharacter(response.data));
  }, []);

  return (
    <>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <img src={character.image} alt={character.name} />
      <p>{}</p>
    </>
  );
};
