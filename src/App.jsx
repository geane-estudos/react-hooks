import React from 'react'
import UserContext from './UserContext.jsx'
import Produto from './Produto.jsx';
import GlobalContext from './GlobalContext.jsx';

const App = () => {
  console.log(UserContext);
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
    <UserContext.Provider value={{nome:"Geane"}}>
      <Produto />
    </UserContext.Provider>
    <GlobalContext.Provider>
      
    </GlobalContext.Provider>
    </div>
  )
}

export default App
