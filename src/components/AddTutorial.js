import React, { useState } from "react";
import TutorialDataService from "../services/TutorialDataService";
import Header from './Header'
import {Link} from 'react-router-dom'

const AddTutorial = () => {
  const initialTutorialState = {
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
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      nomeAtendente: tutorial.nomeAtendente,
      proficional: tutorial.proficional,
      dataInicio: tutorial.dataInicio,
      dataConsulta: tutorial.dataConsulta,
      localizacaoDor: tutorial.localizacaoDor,
      intensidade: tutorial.intensidade,
      tempo: tutorial.tempo,
      tratamento: tutorial.tratamento,
      medicamento: tutorial.medicamento,
      quaisAlergias: tutorial.quaisAlergias,
      alergias: tutorial.alergias,
      incomodo: tutorial.incomodo,
      ocorrencia: tutorial.ocorrencia,
      queix: tutorial.queix,
      habitos: tutorial.habitos,
      nomeCliente: tutorial.nomeCliente,
      estadoCivil: tutorial.estadoCivil,
      profissao: tutorial.profissao,
      telefone: tutorial.telefone,
      enderecoCompleto: tutorial.enderecoCompleto,
      email: tutorial.email,
      comentario: tutorial.comentario

      /* title: tutorial.title,
      description: tutorial.description,
      published: false */
    };

    TutorialDataService.create(data);
    setSubmitted(true);
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
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
             <li className="nav-item text-dark "> 
                Bem vindo Administrador
             </li>
          </div>
        </div>
      </Header>
      {submitted ? (
        <div>
{/*           <h4>You submitted successfully!</h4>
 */}          <h4>Cliente cadastrado com sucesso!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Adicionar
          </button>
        </div>
      ) : (
      
        <div id="contents">

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
              value={tutorial.nomeAtendente}
              onChange={handleInputChange}
              name="nomeAtendente"
              placeholder="Nome Completo"
            />
          </div>
          <label>Profissional Indicado:</label>
          <select class="form-select" aria-label="Default select example" 
              name="proficional" value={tutorial.proficional}
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
              value={tutorial.dataInicio}
              onChange={handleInputChange}
              name="dataInicio"
            />
           <label htmlFor="title">Data da consulta:</label>
            <input
              type="date"
              className="form-control"
              id="title"
              required
              value={tutorial.dataConsulta}
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
                value={tutorial.nomeCliente}
                onChange={handleInputChange}
                name="nomeCliente"
                placeholder="Nome Completo"

              />
            
              <label htmlFor="title">Estado Civil:</label>
              <select class="form-select" aria-label="Default select example"  id="title"
                required value={tutorial.estadoCivil}
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
                value={tutorial.profissao}
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
                value={tutorial.telefone}
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
                value={tutorial.enderecoCompleto}
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
                value={tutorial.email}
                onChange={handleInputChange}
                name="email"
                placeholder="email@email.com"
              />
          </div>

          <div className="form-group">
            <div class="mb-3">
                  <li for="exampleFormControlTextarea1" class="form-label"><strong>Queixa principal:</strong></li>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="
                  Motivo que levou o paciente a procurar ajuda profissional (sintomas e sinais):" 
                  id="title" required onChange={handleInputChange} name="queix" value={tutorial.queix}></textarea>
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
                  value={tutorial.localizacaoDor}
                  onChange={handleInputChange}
                  name="localizacaoDor"
                  placeholder="Local"
                />
            
            <label>Nivel do incomodo:</label>
              <select class="form-select" aria-label="Default select example" id="title"
              required value={tutorial.incomodo}
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
              value={tutorial.intensidade}
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
                value={tutorial.tempo}
                onChange={handleInputChange}
                name="tempo"
                placeholder="Tempo da dor"
              />
            
            <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Qual a agrava e o que melhora a dor?</label>
                  <textarea class="form-control"  required value={tutorial.comentario} onChange={handleInputChange}
                  name="comentario" value={tutorial.comentario} id="title" rows="3" placeholder="
                  Fale um pouco."></textarea>
                  {/* id="exampleFormControlTextarea1" */}
                 {/*  <textarea class="form-control" id="title" required onChange={handleInputChange}
                    rows="3" nome="comentario" value={currentTutorial.comentario} placeholder="
                    Fale um pouco."></textarea> */}{/* exampleFormControlTextarea1 */}
            </div>
          </div>
          
          <div className="form-group">
            <strong><li>Histórico patológico:</li></strong>
              <div>
                <input type="radio" value="true" id="title" required
                  onChange={handleInputChange} name="patologia" value={tutorial.patologia} /> Sim 
                <input type="radio" value="false" id="title" required
                  onChange={handleInputChange} name="patologia" value={tutorial.patologia} /> Não
              </div>
          </div>

          <div className="form-group">
            <label htmlFor="title">Tratamentos já realizados:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.tratamento}
              onChange={handleInputChange}
              name="tratamento"
              placeholder=""
            />
          </div>
        
          <div className="form-group">
            <strong><li htmlFor="tilte">Medicamentos em uso:</li></strong>
              <div>
                <input type="radio" value="Male" id="title" required
                  onChange={handleInputChange} name="med" value={tutorial.med} /> Sim 
                <input type="radio" value="Female" id="title" required
                  onChange={handleInputChange} name="med" value={tutorial.med} /> Não
              </div>

                <div>
                  <label htmlFor="tilte">Quais?</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={tutorial.medicamento}
                  onChange={handleInputChange}
                  name="medicamento"
                  placeholder=""
                />
            </div>
          </div>
          
          <div className="form-group">
            <li><strong htmlFor="title">Alergias: </strong></li>
              <div>
              <input type="radio" value="true" id="title" required
                  onChange={handleInputChange} name="alergia" value={tutorial.alergias}  /> Sim 
                  <input type="radio" value="false" id="title" required
                  onChange={handleInputChange} name="alergia" value={tutorial.alergias} /> Não
                  
              </div>

              <div>
                <label htmlFor="title">Quais?</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={tutorial.quaisAlergias}
                  onChange={handleInputChange}
                  name="quaisAlergias"
                />
            </div>
          </div>

          <div className="form-group">
            <strong><li htmlFor="title">Histórico familiar:</li></strong>
            <label htmlFor="title">Alguma ocorrência na família? </label>
              <div>
                <input type="radio" value="true" id="title" required
                  onChange={handleInputChange} name="historicoFamiliar" value={tutorial.historicoFamiliar}  /> Sim 
                <input type="radio" value="false" id="title" required
                  onChange={handleInputChange} name="historicoFamiliar" value={tutorial.historicoFamiliar}  /> Não
              </div>
              
              <div>
                  <label htmlFor="title">Fale sobre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={tutorial.ocorrencia}
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
              value={tutorial.habitos}
              onChange={handleInputChange}
              name="habitos"
            />
          </div>
          
          <div className="form-group">
            <strong><li>Histórico psicossocial:</li></strong>
            <div className="form-group">
              <label htmlFor="title">Vícios: </label>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" 
                  id="title" required
                  onChange={handleInputChange} name="vicio" value={tutorial.vicio} />
                  <label class="form-check-label" for="inlineCheckbox1">Tabagismo</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" 
                  id="title" required
                  onChange={handleInputChange} name="vicio" value={tutorial.vicio} />
                  <label class="form-check-label" for="inlineCheckbox2">Alcoolismo</label>
                </div>
            </div>
          </div>
          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
