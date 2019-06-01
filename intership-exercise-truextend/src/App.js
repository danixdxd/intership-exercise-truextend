import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "../src/components/pages/HomePage";
import RepositoriesPage from "../src/components/pages/RepositoriesPage";
import AboutPage from "../src/components/pages/AboutPage";
import ErrorPage from "../src/components/pages/ErrorPage";

import './styles/templates/App.css';

function App() {
  return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/repositories" exact component={RepositoriesPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route exact component={ErrorPage} />
      </Switch>
  );
}

export default App;
