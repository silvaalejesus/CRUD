import React, { useState, useEffect } from "react";
import FormDataService from "../services/FormDataService";
import { Link } from "react-router-dom";
import Header from './Header';

const Cliente = props => {
  const initialTutorialState = {
    key: null,
    title: "",
    description: "",
    published: "Unpublished",
  };
  const [message, setMessage] = useState("");
  
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = FormDataService.getById(key)
    console.log(key)
    setCurrentTutorial(data[0])     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status
    };
    FormDataService.update(key, data);  
    setCurrentTutorial(data)
  };

  const updateTutorial = () => {
    //console.log(currentTutorial)
    const data = {
      Nome: currentTutorial.Nome,
      EstadoCivil: currentTutorial.EstadoCivil,
      Profissao: currentTutorial.Profissao,
      Telefone: currentTutorial.Telefone,
      EnderecoCompleto: currentTutorial.EnderecoCompleto,
      Email: currentTutorial.Email,
    };  
    FormDataService.update(key, data);
    setCurrentTutorial(data)
  };

  const deleteTutorial = () => {
    console.log(currentTutorial)
    if (window.confirm('Deseja excluir?')){
      console.log(currentTutorial)
      FormDataService.remove(currentTutorial);  
    }
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
            <Link to={"/add"} className="nav-link text-darke">
              Adicionar
            </Link>
          </li>

          <li className="nav-item text-white"> 
              Bem vindo Administrador
          </li>
        </div>
      </Header>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="Nome">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="Nome"
                  name="Nome"
                  value={currentTutorial.Nome}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="EstadoCivil">Estado Civil</label>
                <input
                  type="text"
                  className="form-control"
                  id="EstadoCivil"
                  name="EstadoCivil"
                  value={currentTutorial.EstadoCivil}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="EstadoCivil">Profissao</label>
                <input
                  type="text"
                  className="form-control"
                  id="Profissao"
                  name="Profissao"
                  value={currentTutorial.Profissao}
                  onChange={handleInputChange}
                />
              </div> 
              
              <div className="form-group">
                <label htmlFor="EstadoCivil">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  id="Telefone"
                  name="Telefone"
                  value={currentTutorial.Telefone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="EstadoCivil">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  name="Email"
                  value={currentTutorial.Email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>
            
              
          {currentTutorial.published ? (
            <button
              className="btn btn-success mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="btn btn-success mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}
          <Link to="/Clientes">
            <button className="btn btn-danger mr-2" onClick={deleteTutorial}>
              Delete
            </button>
          </Link>
          <Link to="/Clientes">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={updateTutorial}
            >
              Update
            </button>
          </Link>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Cliente;
