'use strict';

import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import fetch from 'isomorphic-fetch';

import initialState from '../../initial_state';

// Scaffold actions

// Scaffold reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
export default reducer;

// Scaffold action creators

// Scaffold sagas

// Scaffold sagas watcher functions