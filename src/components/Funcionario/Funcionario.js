import React, { useState, useEffect } from "react";
import FuncionarioDataServiceService from "../../services/FuncionarioDataService";
import { Link } from "react-router-dom";
import Header from '../../components/Header';

const Funcionario = props => {
  // valores iniciais
  const initialFuncionarioState = {
    key: null,
    title: "",
    description: "",
    nomeCliente: "",
    telefone: '',
    proficional: "",
    nomeAtendente: "",
    estadoCivil: "",
    profissao: '',
    enderecoCompleto: '',
    email: '',
    dataNascimento: '',
    cartTrabalho: '',
    published: "Unpublished",
  };
  const [message, setMessage] = useState("");

  const [currentFuncionario, setCurrentFuncionario] = useState(initialFuncionarioState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(() => {
    const data = FuncionarioDataServiceService.getById(key)
    console.log(key)
    setCurrentFuncionario(data[0])
  }, [])
  // pega os valores digitados
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentFuncionario({ ...currentFuncionario, [name]: value });
  };

  //atualiza a opção do published
  const updatePublished = status => {
    const data = {
      nomeAtendente: currentFuncionario.nomeAtendente,
      telefone: currentFuncionario.telefone,
      codigo: currentFuncionario.codigo,
      email: currentFuncionario.email,
      enderecoCompleto: currentFuncionario.enderecoCompleto,
      dataNascimento: currentFuncionario.dataNascimento,
      cartTrabalho: currentFuncionario.cartTrabalho,
      published: status
    };
    FuncionarioDataServiceService.update(key, data);
    setCurrentFuncionario(data)
  };

  const updateFuncionario = () => {
    // valores para o update
    const data = {
      nomeAtendente: currentFuncionario.nomeAtendente,
      telefone: currentFuncionario.telefone,
      codigo: currentFuncionario.codigo,
      nomeCliente: currentFuncionario.nomeCliente,
      email: currentFuncionario.email,
      enderecoCompleto: currentFuncionario.enderecoCompleto,
      dataNascimento: currentFuncionario.dataNascimento,
      estadoCivil: currentFuncionario.estadoCivil,
      cartTrabalho: currentFuncionario.cartTrabalho


    };
    FuncionarioDataServiceService.update(key, data);
    setCurrentFuncionario(data)
  };
  //deletar o funcionario
  const deleteFuncionario = () => {
    console.log(currentFuncionario)
    if (window.confirm('Deseja excluir?')) {
      FuncionarioDataServiceService.remove(currentFuncionario.key);
    }
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
          <li className="nav-item nav-link text-dark h6 mb-0">
            Bem vindo Administrador
          </li>
        </div>
      </Header>
      {currentFuncionario ? (

        <div id="contents">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Funcionario</dt></h1>
          </div>

          <form className="form">
            <div className="form-group">
              <label htmlFor="nomeAtendente">Nome Funcionario</label>
              <input
                type="text"
                className="form-control"
                id="nomeAtendente"
                name="nomeAtendente"
                value={currentFuncionario.nomeAtendente}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="telefone"
                name="telefone"
                value={currentFuncionario.telefone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="codigo">Codigo</label>
              <input
                type="number"
                className="form-control"
                id="codigo"
                name="codigo"
                value={currentFuncionario.codigo}
                onChange={handleInputChange}
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="nomeAtendente"
                name="email"
                value={currentFuncionario.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Endereço:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentFuncionario.enderecoCompleto}
                onChange={handleInputChange}
                name="enderecoCompleto"
                placeholder=""
              />

            </div>
            <div className="form-group">
              <label htmlFor="title">Data de Nascimento:</label>
              <input
                type="date"
                className="form-control"
                id="dataNascimento"

                value={currentFuncionario.dataNascimento}
                onChange={handleInputChange}
                name="dataNascimento"

              />

            </div>
            <div className="form-group">
              <label htmlFor="cartTrabalho">Cart Trabalho:</label>
              <input
                type="text"
                className="form-control"
                id="cartTrabalho"
                name="cartTrabalho"

                value={currentFuncionario.cartTrabalho}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentFuncionario.published ? "Published" : "Pending"}
            </div>
          </form>
          <div className="text-center">
            <div>
              {currentFuncionario.published ? (
                <button
                  className=" btn btn-success "
                  onClick={() => updatePublished(false)}
                >
                  Cancelar
                </button>
              ) : (
                <button
                  className="btn btn-success "
                  onClick={() => updatePublished(true)}
                >
                  Publicar
                </button>
              )}
              <Link to="/funcionario">
                <button className="btn btn-danger " onClick={deleteFuncionario}>
                  Deletar
              </button>
              </Link>
              
            <Link className="" to="/funcionario">
              <button
                type="submit"
                className=" btn btn-warning"
                onClick={updateFuncionario}
              >
                Update
              </button>
            </Link>
            </div>
          </div>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click to return...</p>
        </div>
      )}
    </div>

  );
};

export default Funcionario;
