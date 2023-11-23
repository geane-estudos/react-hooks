import React from 'react'

const Form = () => {
    const [nome, setNome] = React.useState(' ')
    const [email, setEmail] = React.useState(' ')

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='nome'>Nome</label>
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <button>Enviar</button>
    </form>
  )
}

export default Form
