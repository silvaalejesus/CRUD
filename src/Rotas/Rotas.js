import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import AddFuncionario from "../components/Funcionario/AddFuncionario";
import Funcionario from "../components/Funcionario/Funcionario";
import FuncionariosList from "../components/Funcionario/FuncionariosList";
import ProdutoList from "../components/Produto/ProdutoList";
import AddProduto from "../components/Produto/AddProduto";
import Produto from "../components/Produto/Produto";

const Rotas = () => {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/massoterapia"]} component={Login}></Route>
        <Route path="/funcionario" component={FuncionariosList} />
        <Route exact path="/add" component={AddFuncionario} />
        <Route path="/Funcionarios/:id" component={Funcionario} />
        <Route path="/produto" component={ProdutoList} />
        <Route exact path="/addProduto" component={AddProduto} />
        <Route path="/Produto/:id" component={Produto} />
      </Switch>         
    </div>
  )
}

export default Rotas;