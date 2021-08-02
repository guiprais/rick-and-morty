import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;
