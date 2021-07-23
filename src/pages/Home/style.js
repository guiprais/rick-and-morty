import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1080px;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;

  a {
    text-decoration: none;
    color: black;
  }
`;
