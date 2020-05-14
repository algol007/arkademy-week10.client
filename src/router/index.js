import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import History from '../pages/History'
import Login from '../pages/Login'
import Register from '../pages/Register'

function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router