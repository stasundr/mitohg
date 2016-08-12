'use strict';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLoggerMiddleware from 'redux-logger';

import reducer from './root_reducer';
import sagas from './sagas';
import initialState from './initial_state';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLoggerMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, loggerMiddleware);
const store = createStore(reducer, initialState, enhancer);

sagaMiddleware.run(sagas);

export default store;