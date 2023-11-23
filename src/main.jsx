import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './Footer.jsx'
import Contar from './Contar.jsx'
import Effect from './Effect.jsx'
import Comentarios from './Comentarios.jsx'
import Carrinho from './Carrinho.jsx'
import Memo from './Memo.jsx'
import Callback from './Callback.jsx'
import CallbackTeste from './CallbackTeste.jsx'
import Form from './Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Contar />
    <Effect />
    <Comentarios />
    <Carrinho />
    <Memo />
    <Callback />
    <CallbackTeste />
    <Form />
    <Footer />
  </React.StrictMode>,
)
