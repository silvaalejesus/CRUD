import React from "react";
import Header from './Header';
const Formulario = () => {
  return (
    <div>
      <Header />
      <form>
         <label>
         <dl>
         <div class="container">
        <div class="row">
          <div class="col-sm">
         <h1><dt>Ficha técnica</dt></h1>
          </div></div></div>  <li> Data:</li>


            <dt><li>Informações pessoais e de contato: </li></dt>
              <label>Nome:</label><input type="text" name="name"/>
              <label>Estado civil:</label><input type="text" name="ec"/>
              <label>Profissão:</label><input type="text" name="proficao"/>
              <label>Telefone:</label><input type="text" name="telefone"/>
              <label>Endereço completo:</label><input type="text" name="endereco"/>
              <label>E-mail:</label><input type="text" name="email"/>

              <dt><li>Queixa principal: </li></dt>
              Motivo que levou o paciente a procurar ajuda profissional (sintomas e sinais):

              <dt><li>Histórico da queixa: </li></dt>
              
              <label>Localização:</label><input type="text" name="localização"/>
              
              <label>Quantidade:</label><input type="text" name="quantidade"/>

              <label>Intensidade:</label><input type="text" name="intensidade"/>
              
              <label>Tempo:</label><input type="text" name="tempo"/>
              O que agrava ou o que melhora:

              <dt><li>Histórico patológico:</li></dt>
              Tratamentos já realizados:
              Medicamentos em uso:
              Alergias:
              <dt><li>Histórico familiar:</li></dt>
              <dd>Ocorrência na família</dd>
              Hábitos de vida e o tipo de alimentação:
             
              <dt><li>Histórico psicossocial:</li></dt>
              Vícios (tabagismo, alcoolismo).
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="opcao1" />
                <label class="form-check-label" for="inlineCheckbox1">1</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="opcao2" />
                <label class="form-check-label" for="inlineCheckbox2">2</label>
              </div>
              </dl>              
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Formulario