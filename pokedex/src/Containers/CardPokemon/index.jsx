import React from "react";
import { Card, Tooltip, Modal, Button } from "antd";
import { CardPokemonWrapper } from "./style";
import { Divider } from "antd";
import { Icon } from "antd";
import DetalhesModal from "./DetalhesModal";
import { Tag } from "antd";
import DashboardProvider from "../../Pages/Dashboard/Context/DashboardProvider";

const CardPokemon = ({ pokemon, permiteAdicionar, permiteExcluir }) => {
  const [modal, showModal] = React.useState(false);

  const contextPokemons = React.useContext(DashboardProvider);

  const renderModal = () => (
    <Modal
      visible={modal}
      onCancel={() => showModal(false)}
      footer={false}
      width={900}
      destroyOnClose
    >
      <DetalhesModal pokemon={pokemon} />
    </Modal>
  );

  return (
    <CardPokemonWrapper>
      <Card
        key={pokemon.id}
        title={pokemon.name}
        extra={
          <div>
            <Tooltip title="Ver Detalhes">
              <Icon onClick={() => showModal(true)} type="file-search" />
            </Tooltip>
            {permiteExcluir && (
              <React.Fragment>
                <Divider type="vertical" />
                <Tooltip title="Excluir">
                  <Icon
                    onClick={() => contextPokemons.excluir(pokemon)}
                    type="delete"
                  />
                </Tooltip>
              </React.Fragment>
            )}
          </div>
        }
      >
        <div className="imagem">
          <img src={pokemon.sprites.front_default} />
        </div>
        <div className="dados">
          <div className="item">
            <span>Peso:</span>
            <span>{pokemon.weight}</span>
          </div>
          <div className="item">
            <span>Tamanho:</span>
            <span>{pokemon.height}</span>
          </div>
          <div className="item">
            <span>Especie:</span>
            <span>{pokemon.species.name}</span>
          </div>
        </div>
        <span className="label-tipos">Tipos:</span>
        <div className="tipos">
          {pokemon.types.map(item => (
            <Tag color="#87d068">{item.type.name}</Tag>
          ))}
        </div>
        {permiteAdicionar && (
          <div className="footer">
            <Button type="primery" onClick={() => contextPokemons.capturar(pokemon)}>
              Capiturar
            </Button>
          </div>
        )}
      </Card>
      {renderModal()}
    </CardPokemonWrapper>
  );
};

export default CardPokemon;
