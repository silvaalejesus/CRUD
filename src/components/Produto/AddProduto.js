import React, { useState } from "react";
import ProdutoDataService from "../../services/ProdutoDataService";
import Header from '../../components/Header';
import {Link} from 'react-router-dom'

const AddProduto = () => {
  const initialProdutoState = {
    id: null,
    title: "",
    description: "",
    preco: "",
    quant: "",
    published: false
  };
  const [Produto, setProduto] = useState(initialProdutoState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduto({ ...Produto, [name]: value });
  };

  const saveProduto = () => {
    var data = {
      title: Produto.title,
      description: Produto.description,
      preco: Produto.preco,
      quant: Produto.quant,
      published: false
    };

    ProdutoDataService.create(data);
    setSubmitted(true);
  };

  const newProduto = () => {
    setProduto(initialProdutoState);
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

          

          <li className="nav-item active">
            <Link to={"/produto"} className="nav-link text-dark">
              Produto
            </Link>
          </li>
          <li className="nav-item active">
            <Link to={"/addproduto"} className="nav-link text-dark">
              Adicionar Produto
            </Link>
          </li>

          <div>
            <li className="nav-item nav-link text-dark h6 mb-0">
              Bem vindo Administrador
            </li>

          </div>
        </div>
      </Header>
      {submitted ? (
        <div className="mx-auto text-center">
          <h4>Feito com sucesso</h4>
          <button className="btn btn-success" onClick={newProduto}>
            Adicionar
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={saveProduto}>
            <div className="form-group form">
              <label htmlFor="title">Titulo</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={Produto.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>
            <div className="form-group form">
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={Produto.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>
            <div className="form-group form">
              <label htmlFor="preco">Preço</label>
              <input
                type="text"
                className="form-control"
                id="preco"
                required
                value={Produto.preco}
                onChange={handleInputChange}
                name="preco"
              />
            </div>
            <div className="form-group form">
              <label htmlFor="quant">Quantidade</label>
              <input
                type="text"
                className="form-control"
                id="quant"
                required
                value={Produto.quant}
                onChange={handleInputChange}
                name="quant"
              />
            </div>

            <button type="submit"
              className=" btn btn-success text-center buttonform mt-5">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AddProduto;
