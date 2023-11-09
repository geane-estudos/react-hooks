import React from 'react'
import UserContext from './UserContext.jsx'
import Produto from './Produto.jsx';
import Content from './Content.jsx';
import useFetch from './useFetch.jsx';
// import GlobalContext from './GlobalContext.jsx';

const App = () => {
  console.log(UserContext);
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({nome: 'Geane', idade:28})
  const {request, data } = useFetch();

  function handleClick() {
    setAtivo(!ativo)
    setDados({...dados, cidade: 'Porto Alegre'})

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, [])
  console.log(data)
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
    {/* <GlobalContext.Provider>
      
    </GlobalContext.Provider> */}
    <Content />
    </div>
  )
}

export default App
