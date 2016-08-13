'use strict';

import { combineReducers } from 'redux';
import initialState from './initial_state';
import dropzone from './components/dropzone/dropzone_duck';
import scaffold from './components/scaffold/scaffold_duck';

// const rootReducer = combineReducers({
//     scaffold,
//     dropzone
// });

const rootReducer = (state = initialState, action) => {
    return scaffold(dropzone(state, action), action);
};

export default rootReducer;