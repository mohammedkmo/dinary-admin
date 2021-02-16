import React from 'react';
import Routers from './routers/router';
import { isAuth } from './lib/auth';
import Login from './pages/login'
import { BrowserRouter as Router } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function App() {
  
 const [cookies, setCookie] = useCookies(['token']);

  if (!isAuth(cookies)) {
    return <Login setCookie={setCookie} />;
  } else {
    return (
      <Router>
        <Routers />
      </Router>
    );
  }
}
