'use strict';

import React from 'react';
import ReactDropzone from 'react-dropzone';

const renderLoaderSpin = (visible) => {
    if (visible) return (
        <div>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"/>
            <span className="sr-only">Loading...</span>
        </div>
    );
    else return null
};

export default class Dropzone extends React.Component {
    render() {
        const { startFileUpload, isUploading } = this.props;
        return (
            <div className="row">
                <ReactDropzone onDrop={startFileUpload}>
                    <p>Drop your files here</p>
                    {renderLoaderSpin(isUploading)}
                </ReactDropzone>
            </div>
        )
    }
}