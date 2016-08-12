'use strict';

import { watchServerResponse } from './components/dropzone/dropzone_duck';

// Sagas watcher
function* rootSaga() {
    yield [
        watchServerResponse()
    ];
}

export default rootSaga;