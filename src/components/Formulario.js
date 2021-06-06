import React from "react";
import Header from './Header';
const Formulario = () => {
  return (
    <div>
    <Header />
    <form>
      <div className="container">
        <div className="row">
          <div className="col-sm text-center">
            <h1><dt>Ficha técnica</dt></h1>
          </div>
        </div>
          
{/*           <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
*/}
        <strong className="col-sm text-center">Dados do Atendente:</strong>
          <li>Nome:</li><input type="text" name="name-pacuente"/>
          <li>Data:</li>
{/* <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"> */}
      </div>  
          <div>
            <li><strong>Informações pessoais e de contato:</strong></li>
              <li>
                <label>Nome:</label>
                <input type="text" name="name-cliente"/>
              </li>
              <li>
                <label>Estado civil:</label>
                <input type="text" name="estado-civil"/>
              </li>
              <li>
                <label>Profissão:</label>
                <input type="text" name="proficao"/>
              </li>
              <li>
                <label>Telefone:</label>
                <input type="text" name="telefone"/>
              </li>
              <li>
                <label>Endereço completo:</label>
                <input type="text" name="endereco"/>
                </li>
              <li>
                <label>E-mail:</label>
                <input type="text" name="email"/>
              </li>
          </div>
            {/* <dt><li>Queixa principal: </li></dt> */}
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label"><strong>Queixa principal:</strong></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="
              Motivo que levou o paciente a procurar ajuda profissional (sintomas e sinais):"></textarea>
            </div>
            <div>
            <strong><li>Histórico da queixa:</li></strong>
                <label>Localização:</label>
                <input type="text" name="localização" placeholder=""/>
            <li>
              <label>Nivel do incomodo:</label>
{/*                   <input type="text" name="quantidade" placeholder="Quantidade"/>
*/}
              <select className="form-select" aria-label="Default select example">
                <option selected>0</option>
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
            </li>
                <label>Intensidade:</label>
                <input type="text" name="intensidade" placeholder="Intensidade"/>
            
                <label>Tempo:</label>
                <input type="text" name="tempo" placeholder="Tempo"/>
                {/* <label>O que agrava ou o que melhora:</label> */}
                <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"><strong>O que agrava ou o que melhora:</strong></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="
              O que agrava ou o que melhora:"></textarea>
            </div>
            </div>

            <strong><li>Histórico patológico:</li></strong>
            Tratamentos já realizados:
            Medicamentos em uso:
            Alergias:

            <strong><li>Histórico familiar:</li></strong>
            <dd>Ocorrência na família</dd>
            <li>Hábitos de vida e o tipo de alimentação:</li>
            
            <div>
            <strong><li>Histórico psicossocial:</li></strong>
                <li>Vícios:</li> 
                <input type="text" name="vicio"/>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="opcao1" />
              <label className="form-check-label" for="inlineCheckbox1">Tabagismo</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="opcao2" />
              <label className="form-check-label" for="inlineCheckbox2">Alcoolismo</label>
            </div>
                        
      
      <input type="submit" value="Enviar" />
    </form>
  </div>
  );
}

export default Formulario