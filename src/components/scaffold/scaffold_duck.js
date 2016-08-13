'use strict';

import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import fetch from 'isomorphic-fetch';

import initialState from '../../initial_state';

// Scaffold actions
const FETCHING_FILE_STATUS = 'FETCHING_FILE_STATUS';
const      SET_FILE_STATUS = 'SET_FILE_STATUS';

// Scaffold reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_FILE_STATUS:
            return Object.assign({}, state, { isFetching: true });

        case SET_FILE_STATUS:
            const fileList = state.fileList.map(file => {
                action.payload.forEach(updatedFile => {
                    if (updatedFile.id == file.id)
                        file.status = updatedFile.status;
                });

                return file;
            });

            return Object.assign({}, state, {
                isFetching: false,
                fileList
            });

        default:
            return state;
    }
}
export default reducer;

// Scaffold action creators
export function fetchFileStatus(files) {
    return { type: FETCHING_FILE_STATUS, files }
}

export function setFileStatus(payload) {
    console.log(payload); // !!!
    return { type: SET_FILE_STATUS, payload }
}

//
function fetchStatus(payload) {
    const ids = payload.files
        .filter(file => (file.status == 'pending'))
        .map(file => file.id);

    if (ids.length)
        return fetch('/api/v1/status', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ids)
        }).then(response => response.json());
    else return [];
}

// Scaffold sagas
export function* asyncFetch(payload) {
    const new_payload = yield call(fetchStatus, payload);
    yield put(setFileStatus(new_payload));
}

// Scaffold sagas watcher functions
export function* watchFileStatus() {
    yield* takeEvery(FETCHING_FILE_STATUS, asyncFetch);
}