import { all, takeLatest, put } from "redux-saga/effects";

function* resquestGetPokemons() {
  // chamada da api 2º passo
  const response = yield fetch("https://pokeapi.co/api/v2/pokemon").then(res =>
    res.json()
  );

  yield put({ type: "GET_POKEMONS", response }); // chama action do redux
}

function* resquestGetPokemonsId(value) {
  // chamada da api 2º passo
  const response = yield fetch(
    `https://pokeapi.co/api/v2/pokemon/${value.id}`
  ).then(res => res.json());

  yield put({ type: "GET_POKEMONS_ID", response }); // chama action do redux
}

export default function* pokemonSagas() {
  // chamada da api 1º passo
  yield all([
    takeLatest("GET_POKEMONS_SAGAS", resquestGetPokemons),
    takeLatest("GET_POKEMONS_SAGAS_ID", resquestGetPokemonsId)
  ]);
}
