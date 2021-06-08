import React, { useState } from "react";
import ProdutoDataService from "../services/ProdutoDataService";

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
      {submitted ? (
        <div>
          <h4>Feito com sucesso</h4>
          <button className="btn btn-success" onClick={newProduto}>
            Adicionar
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={saveProduto}>
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
              className="btn btn-success">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AddProduto;
