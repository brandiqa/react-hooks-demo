import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import ClassDemo from './components/class-demo';
import HookDemo from './components/hooks-demo';
import UserList from './components/user-list';
import CountdownClass from './components/countdown-class';

export default function App() {
  const links = [
    {
      name: 'Class',
      path: '/',
    },
    {
      name: 'Hook',
      path: '/hook-demo',
    },
    {
      name: 'Users',
      path: '/list-users',
    },
    {
      name: 'Countdown',
      path: '/countdown-class',
    },
  ];

  return (
    <Router>
      <header>
        <Navbar links={links} />
      </header>
      <main className="container mx-auto">
        <Switch>
          <Route path="/" exact>
            <ClassDemo />
          </Route>
          <Route path="/hook-demo">
            <HookDemo />
          </Route>
          <Route path="/list-users">
            <UserList />
          </Route>
          <Route path="/countdown-class">
            <CountdownClass />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
