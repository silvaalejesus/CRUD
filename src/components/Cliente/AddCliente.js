import React, { useState } from "react";
import ClienteDataService from "../../services/Cliente/clienteDataServiceRest";
import Header from '../Header'

const AddCliente = () => {
  const initialClienteState = {
    id: null,
    /* Nome: "", */
    nomeCliente: "",
    telefone: '',
    proficional: "",
    nomeAtendente: "",
    estadoCivil: "",
    profissao: '',
    enderecoCompleto: '',
    email: '',
    dataInicio: "",
    dataConsulta: "",
    localizacaoDor: "",
    intensidade: "",
    tempo: "",
    tratamento: "",
    medicamento: "",
    quaisAlergias: "",
    alergias: "",
    incomodo: "",
    ocorrencia: "",
    habitos: "",
    queix: "",
    comentario: ""
    /* title: "",
    description: "",
    published: false */
  };
  const [Cliente, setCliente] = useState(initialClienteState);
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCliente({ ...Cliente, [name]: value });
  };

  const saveCliente = () => {
    var data = {
      nomeAtendente: Cliente.nomeAtendente,
      proficional: Cliente.proficional,
      dataInicio: Cliente.dataInicio,
      dataConsulta: Cliente.dataConsulta,
      localizacaoDor: Cliente.localizacaoDor,
      intensidade: Cliente.intensidade,
      tempo: Cliente.tempo,
      tratamento: Cliente.tratamento,
      medicamento: Cliente.medicamento,
      quaisAlergias: Cliente.quaisAlergias,
      alergias: Cliente.alergias,
      incomodo: Cliente.incomodo,
      ocorrencia: Cliente.ocorrencia,
      queix: Cliente.queix,
      habitos: Cliente.habitos,
      nomeCliente: Cliente.nomeCliente,
      estadoCivil: Cliente.estadoCivil,
      profissao: Cliente.profissao,
      telefone: Cliente.telefone,
      enderecoCompleto: Cliente.enderecoCompleto,
      email: Cliente.email,
      comentario: Cliente.comentario

    };
    ClienteDataService.create(data)
      .then(response => {
        setCliente({
          nomeAtendente: response.data.nomeAtendente,
          proficional: response.data.proficional,
          dataInicio: response.data.dataInicio,
          dataConsulta: response.data.dataConsulta,
          localizacaoDor: response.data.localizacaoDor,
          intensidade: response.data.intensidade,
          tempo: response.data.tempo,
          tratamento: response.data.tratamento,
          medicamento: response.data.medicamento,
          quaisAlergias: response.data.quaisAlergias,
          alergias: response.data.alergias,
          incomodo: response.data.incomodo,
          ocorrencia: response.data.ocorrencia,
          queix: response.data.queix,
          habitos: response.data.habitos,
          nomeCliente: response.data.nomeCliente,
          estadoCivil: response.data.estadoCivil,
          profissao: response.data.profissao,
          telefone: response.data.telefone,
          enderecoCompleto: response.data.enderecoCompleto,
          email: response.data.email,
          comentario: response.data.comentario
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCliente = () => {
    setCliente(initialClienteState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <Header />
        
      {submitted ? (
        <div>
          <h4>Cliente cadastrado com sucesso!</h4>
          <button className="btn btn-success" onClick={newCliente}>
            Adicionar
          </button>
        </div>
      ) : (

        <div id="contents" className="form">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Anamnese</dt></h1>
          </div>
          <strong className="text-center">Dados do Atendente:</strong>

          <div className="form-group">
            <label htmlFor="title">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.nomeAtendente}
              onChange={handleInputChange}
              name="nomeAtendente"
              placeholder="Nome Completo"
            />
          </div>
          <label>Profissional Indicado:</label>
          <select className="form-select" aria-label="Default select example"
            name="proficional" value={Cliente.proficional}
            onChange={handleInputChange || ''}>
            <option selected>Opções:</option>
            <option value="1">Drenagem Linfática</option>
            <option value="2">Bambuterapia</option>
            <option value="3">Massagem Suéca</option>
            <option value="4">Massagem com Pedras Quentes</option>
            <option value="5">Massagem de Aromaterapia</option>
            <option value="6">Massagem Profunda</option>
            <option value="7">Massagem Desportiva</option>
            <option value="8">Massagem de Facial</option>
            <option value="9">Massagem Shiatsu</option>
            <option value="10">Massagem Tailandesa</option>
            <option value="11">Massagem Tântrica</option>
            <option value="12">Modeladora</option>
            <option value="13">Quick Massagem</option>
            <option value="14">Reflexologia</option>
            <option value="15">Shantala</option>
          </select>

          <div className="form-group">
            <label htmlFor="title">Data de inicio Avaliação:</label>
            <input
              type="date"
              className="form-control"
              id="title"
              required
              value={Cliente.dataInicio}
              onChange={handleInputChange}
              name="dataInicio"
            />
            <label htmlFor="title">Data da consulta:</label>
            <input
              type="date"
              className="form-control"
              id="title"
              required
              value={Cliente.dataConsulta}
              onChange={handleInputChange}
              name="dataConsulta"
            />
          </div>
          <div className="form-group">
            <li><strong>Dados pessoais de Paciente:</strong></li>

            <label htmlFor="title">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.nomeCliente}
              onChange={handleInputChange}
              name="nomeCliente"
              placeholder="Nome Completo"

            />
            <label htmlFor="title">Estado Civil:</label>
            <select className="form-select" aria-label="Default select example" id="title"
              required value={Cliente.estadoCivil}
              onChange={handleInputChange} name="estadoCivil">
              <option selected>Opções</option>
              <option value="0">Solteiro</option>
              <option value="1">Casado</option>
              <option value="2">Divorciado</option>
              <option value="3">Viuvo</option>
            </select>

            <label htmlFor="title">Profissão:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.profissao}
              onChange={handleInputChange}
              name="profissao"
              placeholder=""
            />

            <label htmlFor="title">Telefone:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.telefone}
              onChange={handleInputChange}
              name="telefone"
              placeholder=""
            />

            <label htmlFor="title">Endereço:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.enderecoCompleto}
              onChange={handleInputChange}
              name="enderecoCompleto"
              placeholder=""
            />

            <label htmlFor="title">E-mail:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.email}
              onChange={handleInputChange}
              name="email"
              placeholder="email@email.com"
            />
          </div>

          <div className="form-group">
            <div className="mb-3">
              <li htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Queixa principal:</strong></li>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="
                  Motivo que levou o paciente a procurar ajuda profissional (sintomas e sinais):"
                 required onChange={handleInputChange} name="queix" value={Cliente.queix}>
              </textarea>
            </div>
          </div>

          <div className="form-group">
            <strong><li>Histórico da queixa:</li></strong>
            <label htmlFor="title">Localização da Dor:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.localizacaoDor}
              onChange={handleInputChange}
              name="localizacaoDor"
              placeholder="Local"
            />

            <label>Nivel do incomodo:</label>
            <select className="form-select" aria-label="Default select example" id="title"
              required value={Cliente.incomodo}
              onChange={handleInputChange} name="incomodo">
              <option selected>Opções</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title">Intensidade:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.intensidade}
              onChange={handleInputChange}
              name="intensidade"
              placeholder="Fale um pouco sobre a intensidade da dor"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Tempo:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.tempo}
              onChange={handleInputChange}
              name="tempo"
              placeholder="Tempo da dor"
            />

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Qual a agrava e o que melhora a dor?</label>
              <textarea className="form-control" required onChange={handleInputChange}
                name="comentario" value={Cliente.comentario} id="title" rows="3" placeholder="
                  Fale um pouco.">               
              </textarea>
              
            </div>
          </div>

          <div className="form-group">
            <strong><li>Histórico patológico:</li></strong>
            <div>
              <input type="radio" id="title" required
                onChange={handleInputChange} name="patologia" value={Cliente.patologia} /> Sim
              <input type="radio" id="title" required
                onChange={handleInputChange} name="patologia" value={Cliente.patologia} /> Não
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title">Tratamentos já realizados:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.tratamento}
              onChange={handleInputChange}
              name="tratamento"
              placeholder=""
            />
          </div>

          <div className="form-group">
            <strong><li htmlFor="tilte">Medicamentos em uso:</li></strong>
            <div>
              <input type="radio" id="title" required
                onChange={handleInputChange} name="med" value={Cliente.med} /> Sim
              <input type="radio"  id="title" required
                onChange={handleInputChange} name="med" value={Cliente.med} /> Não
            </div>

            <div>
              <label htmlFor="tilte">Quais?</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={Cliente.medicamento}
                onChange={handleInputChange}
                name="medicamento"
                placeholder=""
              />
            </div>
          </div>

          <div className="form-group">
            <li><strong htmlFor="title">Alergias: </strong></li>
            <div>
              <input type="radio" id="title" required
                onChange={handleInputChange} name="alergia" value={Cliente.alergias} /> Sim
              <input type="radio" id="title" required
                onChange={handleInputChange} name="alergia" value={Cliente.alergias} /> Não

            </div>

            <div>
              <label htmlFor="title">Quais?</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={Cliente.quaisAlergias}
                onChange={handleInputChange}
                name="quaisAlergias"
              />
            </div>
          </div>

          <div className="form-group">
            <strong><li htmlFor="title">Histórico familiar:</li></strong>
            <label htmlFor="title">Alguma ocorrência na família? </label>
            <div>
              <input type="radio" id="title" required
                onChange={handleInputChange} name="historicoFamiliar" value={Cliente.historicoFamiliar} /> Sim
              <input type="radio" id="title" required
                onChange={handleInputChange} name="historicoFamiliar" value={Cliente.historicoFamiliar} /> Não
            </div>

            <div>
              <label htmlFor="title">Fale sobre:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={Cliente.ocorrencia}
                onChange={handleInputChange}
                name="ocorrencia"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title">Hábitos de vida e o tipo de alimentação:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Cliente.habitos}
              onChange={handleInputChange}
              name="habitos"
            />
          </div>

          <div className="form-group">
            <strong><li>Histórico psicossocial:</li></strong>
            <div className="form-group">
              <label htmlFor="title">Vícios: </label>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" 
                  id="title" required
                  onChange={handleInputChange} name="vicio" value={Cliente.vicio} />
                <label class="form-check-label" htmlFor="inlineCheckbox1">Tabagismo</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox"
                  id="title" required
                  onChange={handleInputChange} name="vicio" value={Cliente.vicio} />
                <label className="form-check-label" htmlFor="inlineCheckbox2">Alcoolismo</label>
              </div>
            </div>
          </div>
          <button onClick={saveCliente} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCliente;
