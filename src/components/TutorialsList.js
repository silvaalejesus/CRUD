import React, { useState } from "react";
import { Link } from "react-router-dom";
import TutorialDataService from "../services/TutorialDataService";
import Header from './Header'

const TutorialsList = () => {
  
  const [searchTitle, setSearchTitle] = useState("");
  const [tutorials, setTutorials] = useState(TutorialDataService.getAll());

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };


  const deleteTutorial = (id) => {
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.remove(id);
    }
  }

  const removeAllTutorials = () => {
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.removeAll();
      setTutorials(TutorialDataService.getAll())
    }
  };

  const findByTitle = () => {
    setTutorials(TutorialDataService.getById(searchTitle))
  };

  return (
    <div>
      <Header>
        <li className="nav-item active mr-5">
          <Link to={'/'} className="nav-link text-dark h3">Masso<span className="text-menu">terapia</span></Link>
        </li>
        <div className="navbar-nav mr-auto">
          <li className="nav-item active ml-5">
            <Link to={'/Clientes'} className="nav-link text-dark">Clientes</Link>
          </li>

          <li className="nav-item">
            <Link to={"/add"} className="nav-link text-dark">
              Adicionar
            </Link>
          </li>

          <li className="nav-item text-dark"> 
              Bem vindo Administrador
          </li>
        </div>
      </Header>
      <div className="list row">
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
        <div className="col-md-10">
          <h4>Lista de Clientes</h4>

          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome Paciente</th>
                <th scope="col">Telefone</th>
                <th scope="col">E-mail</th>
                <th scope="col">Atendente</th>
                <th scope="col">Data do atendimento</th>
                <th scope="col">Profissional</th>
              
              </tr>
            </thead>
            <tbody>
            { 
              tutorials &&
              tutorials.map((tutorial, index) => (
                <tr>
                  <th scope="row">{tutorial.key}</th>
                  <td>{tutorial.nomeCliente}</td>
                  <td>{tutorial.telefone}</td>
                  <td>{tutorial.email}</td>
                  <td>{tutorial.nomeAtendente}</td>
                  <td>{tutorial.dataInicio}</td>
                  <td>{tutorial.proficional}</td>

                  <td> <Link to={"/tutorials/" + tutorial.nomeCliente}
                    className="btn btn-warning">Editar</Link>
                  </td>
                  <td> <Link onClick={() => deleteTutorial(tutorial.nomeCliente)}
                    className="btn btn-danger">Deletar</Link>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
            
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllTutorials}>
            Deletar Todos
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default TutorialsList;
