import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './Footer.jsx'
import Contar from './Contar.jsx'
import Effect from './Effect.jsx'
import Comentarios from './Comentarios.jsx'
import Carrinho from './Carrinho.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Contar />
    <Effect />
    <Comentarios />
    <Carrinho />
    <Footer />
  </React.StrictMode>,
)
