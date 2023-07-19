import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  //Objeto Usuario
  const jogo = {
    id : 0,
    nome : '',
    genero : '',
    desenvolvedora : '',
    anoLancamento : '',
    precoJogo : ''

  }

  // UseState
  const [jogos, setUsuario] = useState([]);
  const [objJogo, setObjUsuario] = useState(jogo)
  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/jogo")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setUsuario(retorno_convertido))
  }, [])

  // Obtendo dados do formulário
  const aoDigitar = (e) =>{
    setObjUsuario({...objJogo, [e.target.name]:e.target.value})

  }


  // Cadastrar usuario
  const cadastrar = () => {
    fetch("http://localhost:8080/jogo",{
      method:'post',
      body:JSON.stringify(objJogo),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido =>{
      setUsuario([...jogos, retorno_convertido])
    })
  }

  return (
    <div>
      <p></p>
      <Formulario eventoTeclado={aoDigitar} cadastrar={cadastrar}/>
      <Tabela vetor={jogos} />
    </div>
  );
}

export default App;
