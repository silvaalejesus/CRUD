import React, { useState, useEffect } from "react";
import ClienteDataService from "../../services/Cliente/clienteDataServiceRest";
import { Link } from "react-router-dom";
import Header from '../Header'

// Inicializando os valores
const Cliente = props => {
  const initialClienteState = {
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
  const [currentCliente, setCurrentCliente] = useState(initialClienteState);
  // obter todos os clientes
  const getCliente = id => {
    ClienteDataService.get(id)
      .then(response => {
        setCurrentCliente(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCliente(props.match.params.id);
    return () => {
      setMessage({})
    }
  }, [props.match.params.id]);
  // useEffect(()=>{
  //   const data = ClienteDataService.getById(key)
  //   console.log(key)
  //   setCurrentCliente(data[0])     
  // }, [])
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCliente({ ...currentCliente, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      id: currentCliente.id,
      title: currentCliente.title,
      description: currentCliente.description,
      nomeAtendente: currentCliente.nomeAtendente,
      proficional: currentCliente.proficional,
      dataInicio: currentCliente.dataInicio,
      dataConsulta: currentCliente.dataConsulta,
      localizacaoDor: currentCliente.localizacaoDor,
      intensidade: currentCliente.intensidade,
      tempo: currentCliente.tempo,
      tratamento: currentCliente.tratamento,
      medicamento: currentCliente.medicamento,
      quaisAlergias: currentCliente.quaisAlergias,
      alergias: currentCliente.alergias,
      incomodo: currentCliente.incomodo,
      ocorrencia: currentCliente.ocorrencia,
      habitos: currentCliente.habitos,
      nomeCliente: currentCliente.nomeCliente,
      estadoCivil: currentCliente.estadoCivil,
      profissao: currentCliente.profissao,
      telefone: currentCliente.telefone,
      enderecoCompleto: currentCliente.enderecoCompleto,
      email: currentCliente.email,
      vicio: currentCliente.vicio,
      med: currentCliente.med,
      queix: currentCliente.queix,
      historicoFamiliar: currentCliente.historicoFamiliar,
      patologia: currentCliente.patologia,
      comentario: currentCliente.comentario,
      published: status
    };
    ClienteDataService.update(currentCliente.id, data)
      .then(response => {
        setCurrentCliente({ ...currentCliente, published: status });
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };
  //Atualizar cliente 
  const updateCliente = () => {
    ClienteDataService.update(currentCliente.id, currentCliente)
      .then(response => {
        console.log(response);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
    //console.log(currentCliente)
    // const data = {
    //   nomeCliente: currentCliente.nomeCliente,
    //   estadoCivil: currentCliente.estadoCivil,
    //   profissao: currentCliente.profissao,
    //   telefone: currentCliente.telefone,
    //   enderecoCompleto: currentCliente.enderecoCompleto,
    //   email: currentCliente.email,

    //   nomeAtendente: currentCliente.nomeAtendente,
    //   proficional: currentCliente.proficional,
    //   dataInicio: currentCliente.dataInicio,
    //   dataConsulta: currentCliente.dataConsulta,
    //   localizacaoDor: currentCliente.localizacaoDor,
    //   intensidade: currentCliente.intensidade,
    //   tempo: currentCliente.tempo,
    //   tratamento: currentCliente.tratamento,
    //   medicamento: currentCliente.medicamento,
    //   quaisAlergias: currentCliente.quaisAlergias,
    //   alergias: currentCliente.alergias,
    //   incomodo: currentCliente.incomodo,
    //   ocorrencia: currentCliente.ocorrencia,
    //   habitos: currentCliente.habitos,
    //   vicio: currentCliente.vicio,
    //   med: currentCliente.med,
    //   queix: currentCliente.queix,
    //   historicoFamiliar: currentCliente.historicoFamiliar,
    //   patologia: currentCliente.patologia,
    //};  
    // ClienteDataService.update(key, data);
    // setCurrentCliente(data)
  };
  // deletar cliente
  const deleteCliente = () => {
    console.log(currentCliente)
    if (window.confirm('Deseja excluir?')) {
      ClienteDataService.remove(currentCliente.id)
        .then(response => {
          console.log(response.data);
          props.history.push("/clientes");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <Header />
      {currentCliente ? (
        // formulario
        <div id="contents">
          <div className="col-sm text-center">
            <h1><dt>Ficha de Paciente</dt></h1>
          </div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="nomeCliente">Nome Paciente</label>
              <input
                type="text"
                className="form-control"
                id="nomeCliente"
                name="nomeCliente"
                value={currentCliente.nomeCliente}
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
                value={currentCliente.telefone}
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
                value={currentCliente.email}
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
                value={currentCliente.nomeAtendente}
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
                value={currentCliente.dataInicio}
                onChange={handleInputChange}
              />
            </div>
            <label>Profissional Indicado:</label>
            <select className="form-select" aria-label="Default select example"
              name="proficional" value={currentCliente.proficional}
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
                value={currentCliente.dataConsulta}
                onChange={handleInputChange}
                name="dataConsulta"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Estado Civil:</label>
              <select className="form-select" aria-label="Default select example" id="title"
                required value={currentCliente.estadoCivil}
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
                value={currentCliente.profissao}
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
                value={currentCliente.enderecoCompleto}
                onChange={handleInputChange}
                name="enderecoCompleto"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <div className="mb-3">
                <li htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Queixa principal:</strong></li>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="
                    Motivo que levou o paciente a procurar ajuda profissional (sintomas e sinais):"
                  required onChange={handleInputChange} name="queix" value={currentCliente.queix}>

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
                value={currentCliente.localizacaoDor}
                onChange={handleInputChange}
                name="localizacaoDor"
                placeholder="Local"
              />
              <label>Nivel do incomodo:</label>
              <select className="form-select" aria-label="Default select example"
                id="title" required value={currentCliente.incomodo}
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
                value={currentCliente.intensidade}
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
                value={currentCliente.tempo}
                onChange={handleInputChange}
                name="tempo"
                placeholder="Tempo da dor"
              />
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Agravante e melhora da dor?</label>
                <textarea className="form-control" id="title" required onChange={handleInputChange}
                  rows="3" nome="comentario" value={currentCliente.comentario} placeholder="
                    Fale um pouco."></textarea>{/* exampleFormControlTextarea1 */}
              </div>
            </div>
            <div className="form-group">
              <strong><li>Histórico patológico:</li></strong>
              <div>
                <input type="radio" id="title" required
                  onChange={handleInputChange} name="patologia" value={currentCliente.patologia} /> Sim
                <input type="radio" id="title" required
                  onChange={handleInputChange} name="patologia" value={currentCliente.patologia} /> Não
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="title">Tratamentos já realizados:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentCliente.tratamento}
                onChange={handleInputChange}
                name="tratamento"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <strong><li htmlFor="tilte">Medicamentos em uso:</li></strong>
              <div>
                <input type="radio" id="title" required
                  onChange={handleInputChange} name="med" value={currentCliente.med} /> Sim
                <input type="radio" id="title" required
                  onChange={handleInputChange} name="med" value={currentCliente.med} /> Não
              </div>
              <div>
                <label htmlFor="tilte">Quais?</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={currentCliente.medicamento}
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
                  onChange={handleInputChange} name="alergia" value={currentCliente.alergias} /> Sim
                <input type="radio" id="title" required
                  onChange={handleInputChange} name="alergia" value={currentCliente.alergias} /> Não
              </div>
              <div>
                <label htmlFor="title">Quais?</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={currentCliente.quaisAlergias}
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
                  onChange={handleInputChange} name="historicoFamiliar" value={currentCliente.historicoFamiliar} /> Sim
                <input type="radio" id="title" required
                  onChange={handleInputChange} name="historicoFamiliar" value={currentCliente.historicoFamiliar} /> Não
              </div>
              <div>
                <label htmlFor="title">Fale sobre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={currentCliente.ocorrencia}
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
                value={currentCliente.habitos}
                onChange={handleInputChange}
                name="habitos"
              />
            </div>
            <div className="form-group">
              <strong><li>Histórico psicossocial:</li></strong>
              <div className="form-group">
                <label htmlFor="title">Vícios: </label>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                    required
                    onChange={handleInputChange} name="vicio" value={currentCliente.vicio} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Tabagismo</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                    required
                    onChange={handleInputChange} name="vicio" value={currentCliente.vicio} />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">Alcoolismo</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCliente.published ? "Published" : "Pending"}
            </div>
          </form>
          <div className="text-center">
            {currentCliente.published ? (
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

            <button className="btn btn-danger mr-2" onClick={deleteCliente}>
              Deletar
            </button>

            <Link to="/cliente">
              <button
                type="submit"
                className="btn btn-warning"
                onClick={updateCliente}
              >
                Update
              </button>
            </Link>
            <p>{message}</p>
          </div>
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

export default Cliente;
