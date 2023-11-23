import React from 'react'
import UserContext from './UserContext.jsx'
import Produto from './Produto.jsx';
import Content from './Content.jsx';
import useFetch from './useFetch.jsx';
import styled from 'styled-components';
// import GlobalContext from './GlobalContext.jsx';

const Titulo = styled.h1`
  font-size: 2rem;
  background-color: tomato;
`;
const Button = styled.button`
background:hsl(${Math.random()*360},100%, 50%);
color: white;`

const Click = styled.button`
  font-size: 1.5em;
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
  &:hover{
    background-color: #f68d7a;
  }
`;

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
      <Titulo>Meu Título em Styled Components</Titulo>
    <p>{dados.nome}</p>
    <p>{dados.idade}</p>
    <p>{dados.cidade}</p>
    <Button>Random Button</Button>
    <Click><button onClick={handleClick}> {ativo? 'Ativo' : 'Inativo'}</button></Click>
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
