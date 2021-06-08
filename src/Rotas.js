import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import AddFuncionario from "./components/AddFuncionario";
import Funcionario from "./components/Funcionario";
import FuncionariosList from "./components/FuncionariosList";

const Rotas = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/funcionario" component={FuncionariosList} />
        <Route exact path="/add" component={AddFuncionario} />
        <Route path="/Funcionarios/:id" component={Funcionario} />
      </Switch>         
    </div>
  )
}

export default Rotas;