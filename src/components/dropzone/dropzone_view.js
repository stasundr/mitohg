'use strict';

import React from 'react';
import ReactDropzone from 'react-dropzone';

export default class Dropzone extends React.Component {
    render() {
        const { startFileUpload, isUploading } = this.props;
        return (
            <div className="row">
                <ReactDropzone onDrop={startFileUpload}>
                    <p>Drop your files here</p>
                    <p>{isUploading ? 'LOADING' : 'READY'}</p>
                </ReactDropzone>
            </div>
        )
    }
}