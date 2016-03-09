import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { testRESTful_ProjectInfoPanel, selector_ProjectInfoPanel } from '../../actions/index.js';

class ProjectInfoPanel extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleRefresh = this.handleRefresh.bind(this);
    }
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(testRESTful_ProjectInfoPanel());
    }
    handleRefresh(){
        const {dispatch} = this.props;
        dispatch(testRESTful_ProjectInfoPanel());
    }

    render() {
        const { userAccount: {username}, component:{ serverIsRunning, fetch:{status, error}}} = this.props;
        const header = (
            <p style={{position: 'relative', cursor: 'pointer'}}
               onClick={this.handleRefresh}>
                <span>Project info panel</span>
                <i style={{position: 'absolute', right: '0'}}
                   className={'fa fa-refresh' + ( status === 'start' ? ' fa-spin' : '')}></i>
            </p>
        );
        return (<Panel {...this.props} header={header}>
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
