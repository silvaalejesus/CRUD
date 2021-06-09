import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProdutoDataService from "../../services/ProdutoDataService";
import Header from '../../components/Header';

const ProdutoList = () => {
  const [searchtitle, setSearchtitle] = useState("");
  const [Produto, setProduto] = useState(ProdutoDataService.getAll());

  const onChangeSearchtitle = e => {
    const searchtitle = e.target.value;
    setSearchtitle(searchtitle);
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

  const findBytitle = () => {
    setProduto(ProdutoDataService.getById(searchtitle))
  };

  return (
    <div className="list text-center">
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
      <div className="">
        <div className="input-group mb-3 form">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchtitle}
            onChange={onChangeSearchtitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findBytitle}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
      <div className="mr-auto">
        <h4>Produtos</h4>
        <table className="table">
          <thead className="thead-dark">
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
                    className="mr-0 btn btn-warning">Editar</Link>
                  </td>
                  <td> <Link onClick={() => deleteProduto(Produto.title)}
                    className="mb-0 btn btn-danger">Remover</Link>
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
