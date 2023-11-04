import React from 'react'

const Contar = () => {

  const [contar, setContar] = React.useState(1)

  function handleCount (){
    setContar((contar) => {
      return contar +1
      
    })
  }
  return (
    <div>
      <button onClick={handleCount}>{contar}</button>
    </div>
  )
}

export default Contar

