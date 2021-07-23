import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};
