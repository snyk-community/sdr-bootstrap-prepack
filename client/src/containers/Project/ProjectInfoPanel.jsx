import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { testRESTful_ProjectInfoPanel, selector_ProjectInfoPanel } from '../../actions/index.js';

class ProjectInfoPanel extends Component {

    constructor(props, content) {
        super(props, content);
    }
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(testRESTful_ProjectInfoPanel());
    }

    render() {
        const { userAccount: {username}, component:{ serverIsRunning, fetch:{status, error}}} = this.props;
        return (<Panel {...this.props} header="Project info panel">
                {username ?
                    <p className="text-success">
                        <span>User account successfully signed in</span>
                    </p>
                    :
                    <p className="text-danger">
                        <span>User account is not signed in</span>
                    </p>
                }
                {serverIsRunning ?
                    <p className="text-success">
                        <span>Spring Data REST service is running</span>
                    </p>
                    :
                    <p className="text-danger">
                        <span>Spring Data REST service is stopped or does not respond</span>
                    </p>
                }
                </Panel>
            );
    }
}

export default connect(selector_ProjectInfoPanel)(ProjectInfoPanel);
