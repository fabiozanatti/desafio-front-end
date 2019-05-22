import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from './Sagas/pokemonSagas';
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store;