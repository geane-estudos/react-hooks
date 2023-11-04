import React from 'react'

const Carrinho = () => {
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null)
    const timeoutRef = React.useRef();

    function handleClick () {
        setCarrinho(carrinho+1);
        setNotificacao('Item adicionado ao carrinho');
        
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setNotificacao(null)
        },200); //limpa a notificação depois de 2 segundos
    }
  return (
    <div>
        <p>{carrinho} {notificacao}</p>
      <button onClick={handleClick}>Adicionar ao Carrinho = {carrinho}</button>
    </div>
  )
}

export default Carrinho
