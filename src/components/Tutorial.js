import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialDataService";
import { Link } from "react-router-dom";
import Header from './Header';

const Tutorial = props => {
  const initialTutorialState = {
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
    vicio: "",
    med: "",
    queix: "",
    historicoFamiliar: "",
    patologia: "",
    comentario: "",
    published: "Unpublished",
  };
  const [message, setMessage] = useState("");
  
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = TutorialDataService.getById(key)
    console.log(key)
    setCurrentTutorial(data[0])     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      title: currentTutorial.title,
      description: currentTutorial.description,

      nomeAtendente: currentTutorial.nomeAtendente,
      proficional: currentTutorial.proficional,
      dataInicio: currentTutorial.dataInicio,
      dataConsulta: currentTutorial.dataConsulta,
      localizacaoDor: currentTutorial.localizacaoDor,
      intensidade: currentTutorial.intensidade,
      tempo: currentTutorial.tempo,
      tratamento: currentTutorial.tratamento,
      medicamento: currentTutorial.medicamento,
      quaisAlergias: currentTutorial.quaisAlergias,
      alergias: currentTutorial.alergias,
      incomodo: currentTutorial.incomodo,
      ocorrencia: currentTutorial.ocorrencia,
      habitos: currentTutorial.habitos,
      nomeCliente: currentTutorial.nomeCliente,
      estadoCivil: currentTutorial.estadoCivil,
      profissao: currentTutorial.profissao,
      telefone: currentTutorial.telefone,
      enderecoCompleto: currentTutorial.enderecoCompleto,
      email: currentTutorial.email,
      vicio: currentTutorial.vicio,
      med: currentTutorial.med,
      queix: currentTutorial.queix,
      historicoFamiliar: currentTutorial.historicoFamiliar,
      patologia: currentTutorial.patologia,
      comentario: currentTutorial.comentario,
      published: status
    };
    TutorialDataService.update(key, data);  
    setCurrentTutorial(data)
  };

  const updateTutorial = () => {
    //console.log(currentTutorial)
    const data = {
      nomeCliente: currentTutorial.nomeCliente,
      estadoCivil: currentTutorial.estadoCivil,
      profissao: currentTutorial.profissao,
      telefone: currentTutorial.telefone,
      enderecoCompleto: currentTutorial.enderecoCompleto,
      email: currentTutorial.email,

      nomeAtendente: currentTutorial.nomeAtendente,
      proficional: currentTutorial.proficional,
      dataInicio: currentTutorial.dataInicio,
      dataConsulta: currentTutorial.dataConsulta,
      localizacaoDor: currentTutorial.localizacaoDor,
      intensidade: currentTutorial.intensidade,
      tempo: currentTutorial.tempo,
      tratamento: currentTutorial.tratamento,
      medicamento: currentTutorial.medicamento,
      quaisAlergias: currentTutorial.quaisAlergias,
      alergias: currentTutorial.alergias,
      incomodo: currentTutorial.incomodo,
      ocorrencia: currentTutorial.ocorrencia,
      habitos: currentTutorial.habitos,
      vicio: currentTutorial.vicio,
      med: currentTutorial.med,
      queix: currentTutorial.queix,
      historicoFamiliar: currentTutorial.historicoFamiliar,
      patologia: currentTutorial.patologia,
    };  
    TutorialDataService.update(key, data);
    setCurrentTutorial(data)
  };

  const deleteTutorial = () => {
    console.log(currentTutorial)
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.remove(currentTutorial.key);  
    }
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
          <li className="nav-item text-dark"> 
              Bem vindo Administrador
          </li>
        </div>
      </Header>
      {currentTutorial ? (
        
/*         <div className="edit-form">
 */            <div id="contents">

          <div className="col-sm text-center">
            <h1><dt>Ficha de Paciente</dt></h1>
          </div>
{/*           <h4>Ficha de Paciente(Edição)</h4>
 */}            <form>
              <div className="form-group">
                <label htmlFor="nomeCliente">Nome Paciente</label>
                <input
                  type="text"
                  className="form-control"
                  id="nomeCliente"
                  name="nomeCliente"
                  value={currentTutorial.nomeCliente}
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
                  value={currentTutorial.telefone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={currentTutorial.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="nomeAtendente">Atendente</label>
                <input
                  type="text"
                  className="form-control"
                  id="nomeAtendente"
                  name="nomeAtendente"
                  value={currentTutorial.nomeAtendente}
                  onChange={handleInputChange}
                />
              </div> 

              <div className="form-group">
                <label htmlFor="dataInicio">Data de inicio Avaliação</label>
                <input
                  type="text"
                  className="form-control"
                  id="dataInicio"
                  name="dataInicio"
                  value={currentTutorial.dataInicio}
                  onChange={handleInputChange}
                />
              </div>

              <label>Profissional Indicado:</label>
          <select class="form-select" aria-label="Default select example" 
              name="proficional" value={currentTutorial.proficional}
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
          <label htmlFor="title">Data da consulta:</label>
            <input
              type="date"
              className="form-control"
              id="title"
              required
              value={currentTutorial.dataConsulta}
              onChange={handleInputChange}
              name="dataConsulta"
            />
          </div>
                          
              <div className="form-group">
                <label htmlFor="title">Estado Civil:</label>
                <select class="form-select" aria-label="Default select example"  id="title"
                  required value={currentTutorial.estadoCivil}
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
                  value={currentTutorial.profissao}
                  onChange={handleInputChange}
                  name="profissao"
                  placeholder=""
                />
              
                <label htmlFor="title">Endereço:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={currentTutorial.enderecoCompleto}
                  onChange={handleInputChange}
                  name="enderecoCompleto"
                  placeholder=""
                />
            </div>

            <div className="form-group">
              <div class="mb-3">
                    <li for="exampleFormControlTextarea1" class="form-label"><strong>Queixa principal:</strong></li>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="
                    Motivo que levou o paciente a procurar ajuda profissional (sintomas e sinais):" 
                    id="title" required onChange={handleInputChange} name="queix" value={currentTutorial.queix}></textarea>
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
                    value={currentTutorial.localizacaoDor}
                    onChange={handleInputChange}
                    name="localizacaoDor"
                    placeholder="Local"
                  />
              
              <label>Nivel do incomodo:</label>
                <select class="form-select" aria-label="Default select example" 
                id="title" required value={currentTutorial.incomodo}
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
                value={currentTutorial.intensidade}
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
                  value={currentTutorial.tempo}
                  onChange={handleInputChange}
                  name="tempo"
                  placeholder="Tempo da dor"
                />
              
              <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Agravante e melhora da dor?</label>
                    <textarea class="form-control" id="title" required onChange={handleInputChange}
                    rows="3" nome="comentario" value={currentTutorial.comentario} placeholder="
                    Fale um pouco."></textarea>{/* exampleFormControlTextarea1 */}
              </div>
            </div>

            <div className="form-group">
              <strong><li>Histórico patológico:</li></strong>
                <div>
                  <input type="radio" value="true" id="title" required
                    onChange={handleInputChange} name="patologia" value={currentTutorial.patologia} /> Sim 
                  <input type="radio" value="false" id="title" required
                    onChange={handleInputChange} name="patologia" value={currentTutorial.patologia} /> Não
                </div>
            </div>

            <div className="form-group">
              <label htmlFor="title">Tratamentos já realizados:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentTutorial.tratamento}
                onChange={handleInputChange}
                name="tratamento"
                placeholder=""
              />
            </div>

            <div className="form-group">
              <strong><li htmlFor="tilte">Medicamentos em uso:</li></strong>
                <div>
                  <input type="radio" value="Male" id="title" required
                    onChange={handleInputChange} name="med" value={currentTutorial.med} /> Sim 
                  <input type="radio" value="Female" id="title" required
                    onChange={handleInputChange} name="med" value={currentTutorial.med} /> Não
                </div>

                  <div>
                    <label htmlFor="tilte">Quais?</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={currentTutorial.medicamento}
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
                    onChange={handleInputChange} name="alergia" value={currentTutorial.alergias}  /> Sim 
                    <input type="radio" value="false" id="title" required
                    onChange={handleInputChange} name="alergia" value={currentTutorial.alergias} /> Não
                    
                </div>

                <div>
                  <label htmlFor="title">Quais?</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={currentTutorial.quaisAlergias}
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
                    onChange={handleInputChange} name="historicoFamiliar" value={currentTutorial.historicoFamiliar}  /> Sim 
                  <input type="radio" value="false" id="title" required
                    onChange={handleInputChange} name="historicoFamiliar" value={currentTutorial.historicoFamiliar}  /> Não
                </div>
                
                <div>
                    <label htmlFor="title">Fale sobre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={currentTutorial.ocorrencia}
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
                value={currentTutorial.habitos}
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
                    onChange={handleInputChange} name="vicio" value={currentTutorial.vicio} />
                    <label class="form-check-label" for="inlineCheckbox1">Tabagismo</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" 
                    id="title" required
                    onChange={handleInputChange} name="vicio" value={currentTutorial.vicio} />
                    <label class="form-check-label" for="inlineCheckbox2">Alcoolismo</label>
                  </div>
              </div>
            </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>
            
              
          {currentTutorial.published ? (
            <button
              className="btn btn-success mr-2"
              onClick={() => updatePublished(false)}
            >
            Cancelar
            </button>
          ) : (
            <button
              className="btn btn-success mr-2"
              onClick={() => updatePublished(true)}
            >
            Publicar
            </button>
          )}
          
          <button className="btn btn-danger mr-2" onClick={deleteTutorial}>
            Deletar
          </button>
          
          <Link to="/clientes">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={updateTutorial}
            >
              Update
            </button>
          </Link>
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

export default Tutorial;
