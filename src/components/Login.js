
import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer'; 
import { useForm } from 'react-hook-form'

const Login = () => {
  const [value, setValue] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valueSenha, setValueSenha] = useState('')
  
  const valueInputSearch = (e) => {
		setValue(e.target.value)
    console.log(value)	
	}
  const valueInputEmail = (e) => {
		setValueEmail(e.target.value)
    console.log(valueEmail)
  }
  const valueInputSenha = (e) => {
    setValueSenha(e.target.value)
    console.log(valueSenha)
  }
  // function onSubmit(data) {
  //   console.log('Data submitted: ', data)
  // }
  return (
    <div>
      <Header>
        <input className="form-control mr-sm-2" 
          id="input" 
          name="tracking" 
          type="search" 
          placeholder="Pesquisar" 
          aria-label="Search"
          onChange={valueInputSearch} 
        />   
        <button className="btn btn-dark my-2 my-sm-0" type="submit">Pesquisar</button>
      </Header>
      <div className="login-form">
        <form>
          <label htmlFor="inputEmail">E-mail</label>
          <input onChange={valueInputEmail} type="email" id="inputEmail" name="email" />
          <label htmlFor="inputPassword">Password</label>
          <input onChange={valueInputSenha} type="password" id="inputPassword" name="password" />

          <button id="submit" type="submit">Login</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login; 