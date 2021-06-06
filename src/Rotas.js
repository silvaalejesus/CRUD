import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

const Rotas = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/Clientes" component={TutorialsList} />
        <Route exact path="/add" component={AddTutorial} />
        <Route path="/tutorials/:id" component={Tutorial} />
      </Switch>         
    </div>
  )
}

export default Rotas;