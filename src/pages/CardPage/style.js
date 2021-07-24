import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  div {
    max-width: 1080px;
    margin: 0 auto;

    display: flex;

    justify-content: center;
    align-items: center;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Text = styled.p``;
