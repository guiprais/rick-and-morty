import { Switch, Route } from 'react-router-dom';
import { CardPage } from '../pages/CardPage';
import { Home } from '../pages/Home';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/rick-and-morty/" component={Home} />
      <Route exact path="/rick-and-morty/:id" component={CardPage} />
    </Switch>
  );
};
