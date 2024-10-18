import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Front-end',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Data-science',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Devops',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'UX e Design',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Mobile',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '',
      corSecundaria: ''
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  console.log(colaboradores);

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="UX e Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão"/>
    </div>
  );
}

export default App;
