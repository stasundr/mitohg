'use strict';

import 'babel-polyfill';
import    React from 'react';
import ReactDOM from 'react-dom';
import Scaffold from './components/scaffold/scaffold_container';
import    store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Scaffold/>
    </Provider>,
    document.getElementById('root')
);