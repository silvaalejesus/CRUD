import React, { useState } from "react";
import FormDataService from "../services/FormDataService";
import Header from './Header'
import {Link} from 'react-router-dom';

const AddCliente = () => {
  const initialTutorialState = {
    id: null,
    Nome: "",
    EstadoCivil: "",
    Profissao: '',
    Telefone: '',
    EnderecoCompleto: '',
    Email: ''

  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      Nome: tutorial.Nome,
      EstadoCivil: tutorial.EstadoCivil,
      Profissao: tutorial.Profissao,
      Telefone: tutorial.Telefone,
      EnderecoCompleto: tutorial.EnderecoCompleto,
      Email: tutorial.Email,

    };

    FormDataService.create(data);
    setSubmitted(true);
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
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
          <div className=" collapse navbar-collapse justify-content-end">
            <li className="nav-item text-white "> 
                Bem vindo Administrador
            </li>
          </div>
            
        </div>
      </Header>
      <div className="submit-form mt-3 mx-auto w-50">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
          </button>
          </div>
        ) : (
          <div>

            <div className="form-group">
              <label htmlFor="title">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={tutorial.Nome}
                onChange={handleInputChange}
                name="Nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Estado Civil:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={tutorial.EstadoCivil}
                onChange={handleInputChange}
                name="EstadoCivil"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Profissao:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={tutorial.Profissao}
                onChange={handleInputChange}
                name="Profissao"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Telefone:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={tutorial.Telefone}
                onChange={handleInputChange}
                name="Telefone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Endereco Completo:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={tutorial.EnderecoCompleto}
                onChange={handleInputChange}
                name="EnderecoCompleto"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Email:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={tutorial.Email}
                onChange={handleInputChange}
                name="Email"
              />
            </div>

            <button onClick={saveTutorial} className="btn btn-success mt-3" >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>

  );
};

export default AddCliente;
