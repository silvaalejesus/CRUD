import React, { useState, useEffect } from "react";
import ProdutoDataService from "../services/ProdutoDataService";
import { Link } from "react-router-dom";

const Produto = props => {
  const initialProdutoState = {
    key: null,
    title: "",
    description: "",
    preco: "",
    quant:"",
    published: "Unpublished",
  };
  const [message, setMessage] = useState("");
  const [currentProduto, setCurrentProduto] = useState(initialProdutoState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = ProdutoDataService.getById(key)
    console.log(key)
    setCurrentProduto(data[0])     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduto({ ...currentProduto, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      title: currentProduto.title,
      description: currentProduto.description,
      preco: currentProduto.preco,
      quant: currentProduto.quant,
      published: status
    };
    ProdutoDataService.update(key, data);  
    setCurrentProduto(data)
  };

  const updateProduto = () => {
    //console.log(currentProduto)
    const data = {
      title: currentProduto.title,
      description: currentProduto.description,
      preco: currentProduto.preco,
      published: currentProduto.published,
      quant: currentProduto.quant
      
    };  
    ProdutoDataService.update(key, data);
    setCurrentProduto(data)
  };

  const deleteProduto = () => {
    console.log(currentProduto)
    if (window.confirm('Deseja excluir?')) {
      ProdutoDataService.remove(currentProduto.key);
    }
  };

  return (
    <div>
      {currentProduto ? (
        <div className="edit-form">
          <h4>Produto</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={currentProduto.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={currentProduto.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="preco">Preço</label>
                <input
                  type="text"
                  className="form-control"
                  id="preco"
                  name="preco"
                  value={currentProduto.preco}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quant">Quantidade</label>
                <input
                  type="text"
                  className="form-control"
                  id="quant"
                  name="quant"
                  value={currentProduto.quant}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentProduto.published ? "Published" : "Pending"}
              </div>
            </form>
          {currentProduto.published ? (
            <button
              className="badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              Cancelar Publicação
            </button>
          ) : (
            <button
              className=" badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publicar
            </button>
          )}
          <button className="badge-danger mr-2" onClick={deleteProduto}>
            Apagar
          </button>
          <Link to="/">
            <button
              type="submit"
              className="badge-success"
              onClick={updateProduto}
            >
             Atualizar
            </button>
          </Link>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Por favor, clique em um Tutorial ...</p>
        </div>
      )}
    </div>
  );
};

export default Produto;

