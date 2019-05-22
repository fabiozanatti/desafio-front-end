import React from "react";
import ScrollBars from "react-custom-scrollbars";
import { connect } from "react-redux";
import { Button, Form, Input, Row, Col, Divider } from "antd";
import CardPokemon from "../CardPokemon";
import LocalizarWrapper from "./style";

const scroll = {
  height: 371
};

const LocalizarPokemons = ({ getPokemonsId, pokemon, form }) => {
  const buscaPokemon = () => {
    form.validateFields((err, values) => {
      if (!err) {
        getPokemonsId(values.valor);
      }
    });
  };

  return (
    <LocalizarWrapper>
      <Row type="flex" justify="start" gutter={8}>
        <Col span={8}>
          <Form.Item required={false}>
            {form.getFieldDecorator("valor", {
              rules: [{ required: true, message: "Obrigatório" }]
            })(<Input placeholder="Nome/Id Pokemon" />)}
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item required={false} colon={false}>
            <Button type="primary" onClick={buscaPokemon}>
              Busca
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <ScrollBars style={scroll}>
        <Row
          className="lista-dashboard"
          type="flex"
          justify="start"
          guuter={16}
        >
          <Col span={6}>
            {pokemon && (
              <CardPokemon
                permiteAdicionar
                key={pokemon.id}
                pokemon={pokemon}
              />
            )}
          </Col>
        </Row>
      </ScrollBars>
    </LocalizarWrapper>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard.pokemons,
    pokemon: state.dashboard.pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPokemons: () => dispatch({ type: "GET_POKEMONS_SAGAS" }),
    getPokemonsId: id => dispatch({ type: "GET_POKEMONS_SAGAS_ID", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(LocalizarPokemons));
