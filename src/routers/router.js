import Home from '../pages/home';
import Account from '../pages/account';
import { Switch, Route } from 'react-router-dom';

const Routers = () => {
  const Routes = [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      path: '/account',
      component: Account,
    },
  ];

  return (
    <Switch>
      {Routes.map((route) => (
        <Route
          key='path'
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
};

export default Routers;
