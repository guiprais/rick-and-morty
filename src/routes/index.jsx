import { Switch, Route } from 'react-router-dom';
import { CardPage } from '../pages/CardPage';
import { Home } from '../pages/Home';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={CardPage} />
    </Switch>
  );
};
