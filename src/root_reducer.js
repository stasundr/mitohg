'use strict';

import { combineReducers } from 'redux';
import dropzoneReducer from './components/dropzone/dropzone_duck';
import scaffoldReducer from './components/scaffold/scaffold_duck';

// const rootReducer = (state) => combineReducers({
//     scaffoldReducer,
//     dropzoneReducer
// });

export default dropzoneReducer;//rootReducer;