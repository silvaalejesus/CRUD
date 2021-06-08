import React, { useState } from "react";
import { Link } from "react-router-dom";
import FuncionarioDataServiceService from "../services/FuncionarioDataService";
import Header from './Header'

const FuncionariosList = () => {
  
  const [searchTitle, setSearchTitle] = useState("");
  const [Funcionarios, setFuncionarios] = useState(FuncionarioDataServiceService.getAll());

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  //remove um funcionario pelo id
  const deleteFuncionario = (id) => {
    if (window.confirm('Deseja excluir?')){
      FuncionarioDataServiceService.remove(id);
    }
  }
  //remove todos os funcionario
  const removeAllFuncionarios = () => {
    if (window.confirm('Deseja excluir?')){
      FuncionarioDataServiceService.removeAll();
      setFuncionarios(FuncionarioDataServiceService.getAll())
    }
  };
  //filtra o nome do funcionario
  const findByTitle = () => {
    setFuncionarios(FuncionarioDataServiceService.getById(searchTitle))
  };

  return (
    <div>
      <Header>
        <li className="nav-item active mr-5">
          <Link to={'/'} className="nav-link text-dark h3">Masso<span className="text-danger">terapia</span></Link>
        </li>
        <div className="navbar-nav mr-auto">
          <li className="nav-item active ml-5">
            <Link to={'/funcionario'} className="nav-link text-dark">Funcionario</Link>
          </li>

          <li className="nav-item ">
            <Link to={"/add"} className="nav-link text-dark ">
              Adicionar
            </Link>
          </li>

          <div>
            <li className="nav-item nav-link text-dark h6 mb-0"> 
                Bem vindo Administrador
            </li>
            
          </div>
        </div>
      </Header>
      <div className="list text-center">
        <div className="col-md-10">
          
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByTitle}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-10 mx-auto">
          <h4>Lista de Funcionario</h4>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome Funcionario</th>
                <th scope="col">Telefone</th>
                <th scope="col">Codigo</th>
                <th scope="col">E-mail</th>
                <th scope="col">Endereço</th>
                <th scope="col">Data de Nascimento</th>
                <th scope="col">Carteira Trabalho</th>
              
              </tr>
            </thead>
            <tbody>
            { 
              Funcionarios &&
              Funcionarios.map((Funcionario, index) => (
                <tr>
                  <th scope="row">{Funcionario.key}</th>
                  <td>{Funcionario.nomeAtendente}</td>
                  <td>{Funcionario.telefone}</td>
                  <td>{Funcionario.codigo}</td>
                  <td>{Funcionario.email}</td>
                  <td>{Funcionario.enderecoCompleto}</td>
                  <td>{Funcionario.dataNascimento}</td>
                  <td>{Funcionario.cartTrabalho}</td>

                  <td> <Link to={"/funcionarios/" + Funcionario.nomeAtendente}
                    className="btn btn-warning">Editar</Link>
                  </td>
                  <td onClick={() => findByTitle()}><Link to="/funcionario"onClick={() => deleteFuncionario(Funcionario)}
                    className="btn btn-danger">Deletar</Link>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
            
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllFuncionarios}>
            Deletar Todos
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default FuncionariosList;
