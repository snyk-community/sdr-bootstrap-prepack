import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signIn_AutoSignIn, selectorAutoSignIn } from '../../actions/index.js';

class AutoSignIn extends Component {

    constructor(props, content) {
        super(props, content);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(signIn_AutoSignIn());
    }

    componentWillReceiveProps(nextProps){
        const { username } = nextProps.userAccount;
        const { username: _username } = this.props.userAccount;

        const { fetch: { status } } = nextProps.component;
        const { routeAfterSignInFailed } = this.props;

        if(!username && _username && routeAfterSignInFailed){
            this.context.router.push(routeAfterSignInFailed);
        }

        if(status === 'error' && routeAfterSignInFailed){
            this.context.router.push(routeAfterSignInFailed);
        }
    }

    render() {
        return (
            <span></span>
        );
    }
}

AutoSignIn.contextTypes = {
    router: PropTypes.object
};

AutoSignIn.propTypes = {
    routeAfterSignInFailed: PropTypes.string
};

AutoSignIn.defaultProps = {
    routeAfterSignInFailed: null
};

export default connect(selectorAutoSignIn)(AutoSignIn);
