'use strict';

import { connect } from 'react-redux';
import component from './dropzone_view';
import { startFileUpload } from './dropzone_duck';

function mapStateToProps(state) {
    return {
        isUploading: state.isUploading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startFileUpload:  (files) => dispatch(startFileUpload(files)),
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;