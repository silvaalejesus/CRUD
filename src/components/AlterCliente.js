import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormDataService from "../services/FormDataService";
import Header from './Header'

const AlterCliente = () => {

  const [searchTitle, setSearchTitle] = useState("");
  const [tutorials, setTutorials] = useState(FormDataService.getAll());

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };


  const deleteTutorial = (id) => {
    if (window.confirm('Deseja excluir?')) {
      
      FormDataService.remove(id);
    }
  }

  const removeAllTutorials = () => {
    if (window.confirm('Deseja excluir?')) {
      FormDataService.removeAll();
      setTutorials(FormDataService.getAll())
    }
  };

  const findByTitle = () => {
    setTutorials(FormDataService.getById(searchTitle))
  };

  return (
    <div>
      <Header>
        <li className="nav-item active mr-5">
          <Link to={'/'} className="nav-link text-dark h3">Masso<span className="text-menu">terapia</span></Link>
        </li>
        <div className="navbar-nav mr-auto">
          <li className="nav-item active ml-5">
            <Link to={'/Clientes'} className="nav-link text-dark h6">Clientes</Link>
          </li>

          <li className="nav-item">
            <Link to={"/add"} className="nav-link text-dark h6">
              Adicionar
            </Link>
          </li>

          <li className="nav-item text-dark h6"> 
              Bem vindo Administrador
          </li>
            
        </div>
      </Header>
      <div className="Container list row mt-3">
        <div className="">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control "
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
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="text-center">Formulario de clientes</h4>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Estado civil</th>
                <th scope="col">Profissão</th>
                <th scope="col">Telefone</th>
                <th scope="col">Endereço completo:</th>
                <th scope="col">E-mail:</th>

              </tr>
            </thead>
            <tbody>
              {
                tutorials &&
                tutorials.map((tutorial, index) => (
                  <tr>
                    <th scope="row">{tutorial.key}</th>
                    <td>{tutorial.Nome}</td>
                    <td>{tutorial.EstadoCivil}</td>
                    <td>{tutorial.Profissao}</td>
                    <td>{tutorial.Telefone}</td>
                    <td>{tutorial.EnderecoCompleto}</td>
                    <td>{tutorial.Email}</td>

                    <td> <Link to={"/Cliente/" + tutorial.Nome}
                      className="btn btn-warning">Editar</Link>
                    </td>
                    <td onClick={() => findByTitle()}><Link to={"/Clientes"} onClick={() => deleteTutorial(tutorial)}
                      className="btn btn-danger">Remover</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllTutorials}>
            Remove All
          </button>
        </div>
      </div>
    </div>

  );
};

export default AlterCliente;
