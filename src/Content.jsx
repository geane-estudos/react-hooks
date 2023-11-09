import React from 'react'

const Content = () => {

    const [isOpen, setIsOpen] = React.useState(true)

    function closePage () {
        setIsOpen(() => {
            console.log(isOpen)
            return isOpen===false
           
        })
    }
    // const closePage = () => {
    //     setIsOpen(false);
    // }
  return (
    <div>
     {isOpen && <h1>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo accumsan
      </h1>}
      <button onClick={closePage}>fechar</button>
    </div>
  )
}

export default Content

