'use strict';

import { connect } from 'react-redux';
import component from './scaffold_view';
import { fetchFileStatus } from './scaffold_duck';

function mapStateToProps(state) {
    return {
        list: state.fileList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFileStatus: (files) => dispatch(fetchFileStatus(files))
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;