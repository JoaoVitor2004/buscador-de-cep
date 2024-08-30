import { Container, Title, ContainerInput, InputSearch, ButtonSearch, Main, Cep, Rua, Complemento, Bairro, Estado } from './styles.js'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import api from './services/api.js'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    // transformar uma função assincrona que pode demorar um pouco para ser carregada
    if (input === '') {
      alert('Preencha algum CEP!')
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    } catch {
      alert(`Aconteceu algum erro`)
      setInput('')
    }
  }

  return (
    <Container>
      <Title className='title'>Buscador de cep</Title>
      <ContainerInput>
        <InputSearch value={input} onChange={(e) => setInput(e.target.value)} id='input-cep' placeholder='Digite seu cep...' />
        <ButtonSearch onClick={handleSearch}>
          <FaSearch size={25} color='#fff' />
        </ButtonSearch>
      </ContainerInput>

      {Object.keys(cep).length > 0 && ( // verifica se ha uma propriedade neste objeto cep, com Object.keys
        <Main>
          <Cep>CEP: {cep.cep}</Cep>
          <Rua>Rua: {cep.logradouro}</Rua>
          <Complemento>Complemento: {cep.complemento ? cep.complemento : 'Não tem complemento'}</Complemento>
          <Bairro>{cep.bairro}</Bairro>
          <Estado>{cep.localidade} - {cep.uf}</Estado>
        </Main>
      )}


    </Container>
  )
}

export default App