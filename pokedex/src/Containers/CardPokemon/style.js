import styled from "styled-components";

const CardPokemonWrapper = styled.div`
  .ant-card-body {
    padding: 15px;
  }

  .ant-card-bordered {
    border: 1px solid #ea0909;
    border-bottom: 5px solid #ea0909;
    border-bottom-left-radius: 30px;
  }
  .ant-card-head-title {
    text-transform: uppercase;
  }
  .ant-card-head {
    border-bottom: none;
  }
  .imagem {
    display: flex;
    justify-content: center;
    border: 1px solid #ea0909;
  }
  i {
    color: #000;
  }

  .dados {
    margin-top: 10px;
    font-weight: 700;
    .item {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed;
    }
  }
  .tipos {
    margin-top: 10px;
  }
  .label-tipos {
    font-weight: 700;
  }
  .footer {
    margin-top: 10px;
    button {
      width: 100%;
    }
  }
`;

const DetalhesModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  .status {
    flex: 1;
    padding: 10px;
  }
  .habilidade {
    flex: 1;
    padding: 10px;
  }

  .label-title {
    font-weight: 700;
  }
  .moves {
    .ant-tag {
      width: 100%;
      margin-bottom: 6px;
    }
  }
`;

export { DetalhesModalWrapper, CardPokemonWrapper };
