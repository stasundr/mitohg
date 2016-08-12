'use strict';

import { connect } from 'react-redux';
import component from './scaffold_view';
//import { startFileUpload } from './scaffold_duck';

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;