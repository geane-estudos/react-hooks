// import React from "react";

// const GlobalContext = React.createContext();

// export const GlobalStorage =({children}) => {
//   const [dados, setDados] = React.useState(null);

//   React.useEffect(() => {
//     fetch('https://ranekapi.origamid.dev/json/api/produto/')
//     .then((response) => response.json())
//     .then((json)=> setDados(json));
//   }[]);

//   return (
//     <GlobalContext.Provider value={ dados}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }