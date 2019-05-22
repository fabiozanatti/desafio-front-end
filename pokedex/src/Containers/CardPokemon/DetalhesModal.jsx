import React from "react";
import Status from "../../Components/Status";
import { Tag, Row, Col } from "antd";
import { DetalhesModalWrapper } from "./style";

import ScrollBars from "react-custom-scrollbars";

const scroll = {
  height: 200
};

const DetalhesModal = ({ pokemon }) => (
  <DetalhesModalWrapper>
    <div className="status">
      <div className="label-title">Status</div>
      <Status stats={pokemon.stats} />
    </div>
    <div className="habilidade">
      <div className="label-title">Habilidade</div>
      <div>
        {pokemon.abilities.map(hab => (
          <Tag color="#87d068">{hab.ability.name}</Tag>
        ))}
      </div>
      <div className="label-title">Movimentos</div>
      <ScrollBars style={scroll}>
        <Row type="flex" justify="start" gutter={8}>
          {pokemon.moves.map(item => (
            <Col className="moves" span={6}>
              <Tag color="#108ee9">{item.move.name}</Tag>
            </Col>
          ))}
        </Row>
      </ScrollBars>
    </div>
  </DetalhesModalWrapper>
);

export default DetalhesModal;
