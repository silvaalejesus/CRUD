import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Funcionario';
import Formulario from './Formulario';
import Funcionario from './Funcionario';

const Rotas = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/cadastro" component={Cadastro}></Route>
        <Route path="/formulario" component={Formulario}></Route>
        <Route path="/funcionario" component={Funcionario}></Route>
      </Switch>         
    </div>
  )
}

export default Rotas;