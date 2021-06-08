import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProdutoDataService from "../services/ProdutoDataService";

const ProdutoList = () => {

  const [searchTitle, setSearchTitle] = useState("");
  const [Produto, setProduto] = useState(ProdutoDataService.getAll());

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };


  const deleteProduto = (id) => {
    if (window.confirm('Deseja excluir?')) {
      ProdutoDataService.remove(id);
    }
  }

  const removeAllProduto = () => {
    if (window.confirm('Deseja excluir?')) {
      ProdutoDataService.removeAll();
      setProduto(ProdutoDataService.getAll())
    }
  };

  const findByTitle = () => {
    setProduto(ProdutoDataService.getById(searchTitle))
  };

  return (
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
              Pesquisar
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <h4>Produtos</h4>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descrição</th>
              <th scope="col">Preço</th>
              <th scope="col">Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {
              Produto &&
              Produto.map((Produto, index) => (
                <tr>
                  <th scope="row">{Produto.key}</th>
                  <td>{Produto.title}</td>
                  <td>{Produto.description}</td>
                  <td>{Produto.preco}</td>
                  <td>{Produto.quant}</td>
                  <td> <Link to={"/Produto/" + Produto.title}
                    className="badge-warning">Editar</Link>
                  </td>
                  <td> <Link onClick={() => deleteProduto(Produto.title)}
                    className="badge-danger">Remover</Link>
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllProduto}>
          Remover Tudo
        </button>
      </div>
    </div>
  );
};

export default ProdutoList;
