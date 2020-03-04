import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Nav} from 'react-bootstrap';

import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <Router>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link  as={Link} to="/favorites">Favorites</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <Switch>
          <Route path="/details/:id">
            <div><Details/></div>
          </Route>
          <Route path="/favorites">
            <div><Favorites/></div>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default (App);
