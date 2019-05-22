import React from "react";
import DashboardProvider from "./DashboardProvider";

const DashboardContext = ({ children }) => {
  const [lista, onChangeLista] = React.useState([]);

  const capturarPokemons = e => {
    console.log("e", e);
    onChangeLista([...lista, e]);
  };

  const excluirPokemons = e => {
    console.log("e", e);
    onChangeLista(lista.filter(x => x.id !== e.id));
  };

  const provider = () => {
    const value = {
      listaPokemons: lista,
      capturar: capturarPokemons,
      excluir: excluirPokemons
    };

    return value;
  };

  return (
    <DashboardProvider.Provider value={provider()}>
      {children}
    </DashboardProvider.Provider>
  );
};

export default DashboardContext;
