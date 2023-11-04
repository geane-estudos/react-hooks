import React from 'react'

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({nome: 'Geane', idade:28})

  function handleClick() {
    setAtivo(!ativo)
    setDados({...dados, cidade: 'Porto Alegre'})
  }
  return (
    <div>
    <p>{dados.nome}</p>
    <p>{dados.idade}</p>
    <p>{dados.cidade}</p>
    <button onClick={handleClick}> {ativo? 'Ativo' : 'Inativo'}</button>
    </div>
  )
}

export default App
