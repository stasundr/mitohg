'use strict';

import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import fetch from 'isomorphic-fetch';
//import request from'superagent';

import initialState from '../../initial_state';

// Dropzone actions
const UPLOAD = 'FILE_UPLOADING';
const  READY = 'FILE_UPLOAD_FINISHED';

// Dropzone reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case UPLOAD:
            return Object.assign({}, state, {
                isUploading: true,
                files: action.files
            });

        case READY:
            return Object.assign({}, state, {
                list: [...state.list, ...action.payload.files],
                isUploading: false
            });

        default:
            return state;
    }
}
export default reducer;

// Dropzone action creators
export function startFileUpload(files) {
    return { type: UPLOAD, files }
}

export function processServerResponse(payload) {
    return { type: READY, payload }
}

function uploadFiles(payload) {
    let data = new FormData();
    payload.files.forEach(file => data.append(file.name, file));

    return fetch('/api/v1/file-upload', { method: 'POST', body: data })
        .then(response => response.json());
}

// Dropzone sagas
export function* asyncUpload(payload) {
    const new_payload = yield call(uploadFiles, payload);
    yield put(processServerResponse(new_payload));
}

// Dropzone sagas watcher functions
export function* watchServerResponse() {
    yield* takeEvery(UPLOAD, asyncUpload);
}