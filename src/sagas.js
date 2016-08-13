'use strict';

import { watchServerResponse } from './components/dropzone/dropzone_duck';
import { watchFileStatus } from './components/scaffold/scaffold_duck';

// Sagas watcher
function* rootSaga() {
    yield [
        watchServerResponse(),
        watchFileStatus()
    ];
}

export default rootSaga;