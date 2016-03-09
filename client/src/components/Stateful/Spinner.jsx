import React, { Component, PropTypes } from 'react';

class Spinner extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <div style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, zIndex: '100', padding: '3px', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <i className="fa fa-spinner fa-pulse"></i>
                <span>&nbsp;&nbsp;Loading</span>
            </div>
        );
    }
}

export default Spinner;
