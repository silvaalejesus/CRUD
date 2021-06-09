import React, { useState } from "react";
import FuncionarioDataServiceService from "../../services/FuncionarioDataService";
import Header from '../../components/Header';
import {Link} from 'react-router-dom'

const AddFuncionario = () => {
  const initialfuncionarioState = {
    id: null,
    /* Nome: "", */
    nomefuncionario: "",
    telefone: '',
    nomeAtendente: "",
    codigo: "",
    estadoCivil: "",
    profissao: '',
    enderecoCompleto: '',
    email: '',
    dataNascimento: '',
    cartTrabalho: "",
    

    /* title: "",
    description: "",
    published: false */
  };
  const [funcionario, setFuncionario] = useState(initialfuncionarioState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFuncionario({ ...funcionario, [name]: value });
  };

  const savefuncionario = () => {
    var data = {
      nomeAtendente: funcionario.nomeAtendente,
      telefone: funcionario.telefone,
      codigo: funcionario.codigo,
      email: funcionario.email,
      enderecoCompleto: funcionario.enderecoCompleto,
      dataNascimento: funcionario.dataNascimento,
      cartTrabalho: funcionario.cartTrabalho,

    };

    FuncionarioDataServiceService.create(data);
    setSubmitted(true);
  };

  const newfuncionario = () => {
    setFuncionario(initialfuncionarioState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <Header>
        <li className="nav-item active mr-5">
          <Link to={'/'} className="nav-link text-dark h3">Masso<span className="text-danger">terapia</span></Link>
        </li>
        <div className="navbar-nav mr-auto">
          <li className="nav-item active ml-5">
            <Link to={'/funcionario'} className="nav-link text-dark">Funcionario</Link>           
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link text-dark">
               Adicionar
             </Link>
          </li>
          <li className="nav-item active mr-5">
            <Link to={"/Produto"} className="nav-link text-dark">
              Produto
            </Link>
           
          </li>
          <div className=" collapse navbar-collapse justify-content-end">
             <li className="nav-item nav-link text-dark h6 mb-0"> 
                Bem vindo Administrador
             </li>
          </div>
        </div>
      </Header>
      {submitted ? (
        <div>
{/*           <h4>You submitted successfully!</h4>
 */}      <h4 >Funcionario cadastrado com sucesso!</h4>
          <button className="btn btn-success" onClick={newfuncionario}>
            Adicionar
          </button>
        </div>
      ) : (
      
        <div id="contents">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Funcionario</dt></h1>
          </div>
          <div className="text-center" >
            <strong >Dados do Funcionario:</strong>
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={funcionario.nomeAtendente}
              onChange={handleInputChange}
              name="nomeAtendente"
              placeholder="Nome Completo"
            />
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Telefone:</label>
            <input
              type="number"
              className="form-control"
              id="title"
              required
              value={funcionario.telefone}
              onChange={handleInputChange}
              name="telefone"
              placeholder="telefone"
            />
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Codigo:</label>
            <input
              type="number"
              className="form-control"
              id="title"
              required
              value={funcionario.codigo}
              onChange={handleInputChange}
              name="codigo"
              placeholder="codigo"
            />
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Email:</label>
            <input
              type="email"
              className="form-control"
              id="title"
              required
              value={funcionario.email}
              onChange={handleInputChange}
              name="email"
              placeholder="email"
            />
          </div>
          <div className="form-group form" >
            <label htmlFor="title">Endereço:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={funcionario.enderecoCompleto}
              onChange={handleInputChange}
              name="enderecoCompleto"
              placeholder="Endereco"
            />
          </div>
          

          <div className="form-group form">
            <label htmlFor="title">Data de Nascimento:</label>
            <input
              type="date"
              className="form-control"
              id="title"
              required
              value={funcionario.dataNascimento}
              onChange={handleInputChange}
              name="dataNascimento"
            />
           <label htmlFor="title">Cart trabalho:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={funcionario.cartTrabalho}
              onChange={handleInputChange}
              name="cartTrabalho"
            />
          </div>
            
          <button onClick={savefuncionario} className="mt-5 btn btn-success text-center buttonform">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddFuncionario;
