import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  /* margin: 0.5rem; */
  box-shadow: 0px 0px 1px;

  width: 250px;
  height: 300px;

  background: #fff;

  transform: scale(0.9);
  transition: all ease 0.25s;

  text-decoration: none;

  img {
    max-width: 150px;
  }

  p {
    text-align: center;
  }

  &:hover {
    transform: scale(1);
  }
`;
