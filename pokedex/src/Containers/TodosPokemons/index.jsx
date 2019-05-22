import React from "react";
import ScrollBars from "react-custom-scrollbars";
import DashboardProvider from "../../Pages/Dashboard/Context/DashboardProvider";
import CardPokemon from "../CardPokemon";
import { Row, Col } from "antd";

const scroll = {
  height: 338,
  width: "96%"
};

const TodosPokemons = () => {
  const contextPokemons = React.useContext(DashboardProvider);

  return (
    <ScrollBars style={scroll}>
      <Row type="flex" justify="center" gutter={8}>
        {contextPokemons.listaPokemons.map(pokemon => (
          <Col style={{ marginTop: "10px" }} span={6}>
            <CardPokemon permiteExcluir key={pokemon.id} pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </ScrollBars>
  );
};

export default TodosPokemons;
