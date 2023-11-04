import React from 'react'

const Comentarios = () => {
    const [comentarios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState('');
    const inputElement = React.useRef();
  
    function handleClick() {
      setComentarios((comentarios) => [...comentarios, input]);
      setInput('');
      inputElement.current.focus(); // para focar no input depois do enter
    }
  
    return (
      <div>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </div>
    );
  };

export default Comentarios
