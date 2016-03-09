import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Panel } from 'react-bootstrap';
import { AlertDismissable } from '../../components/Bootstrap';
import InputTextStateful from '../../components/Stateful/InputTextStateful.jsx';
import CheckboxStateful from '../../components/Stateful/CheckboxStateful.jsx';
import Spinner from '../../components/Stateful/Spinner.jsx';
import { selectorSignInOutForm, signIn_SignInOutForm, signOut_SignInOutForm, cleanError_SignInOutForm } from '../../actions/index.js';

class SignInOutForm extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.handleCleanError = this.handleCleanError.bind(this);
        this.state = {
            username: '',
            rememberMe: true
        };
    }

    componentWillReceiveProps(nextProps) {
        const { fetch: { status } } = nextProps.component;
        const { fetch: { status: _status } } = this.props.component;
        if (status === 'done' && _status === 'start' && this.props.routeAfterSignIn) {
            this.context.router.push(this.props.routeAfterSignIn);
        }
    }

    handleSignIn(e) {
        e.preventDefault();
        e.stopPropagation();
        const {dispatch} = this.props;
        const {usernameInput, passwordInput, rememberMeCheckbox} = this.refs;
        this.setState({
            username: usernameInput.getValue(),
            rememberMe: rememberMeCheckbox.getValue()
        });
        dispatch(signIn_SignInOutForm(usernameInput.getValue(), passwordInput.getValue(), rememberMeCheckbox.getValue()));
    }

    handleSignOut(e) {
        e.preventDefault();
        e.stopPropagation();
        const {dispatch, routeAfterSignOut} = this.props;
        dispatch(signOut_SignInOutForm());
        if(routeAfterSignOut){
            this.context.router.push(routeAfterSignOut);
        }
    }

    handleCleanError() {
        const {dispatch} = this.props;
        dispatch(cleanError_SignInOutForm());
    }

    render() {
        const {userAccount: {username, authorities}, component: {fetch: {status, error}}} = this.props;
        const { username: _username, rememberMe: rememberMe } = this.state;
        let formContent = null;
        if (username) {
            formContent = (
                <div>
                    <Panel
                        header={ <h3 className="text-center"><span>User account profile</span></h3> }
                        bsStyle="primary">
                        <h4><span>User name:</span></h4>
                        <p>
                            <span>{ username }</span>
                        </p>
                        <h4><span>Authorities:</span></h4>
                        <p>
                            <span>{ authorities }</span>
                        </p>
                        <Button
                            bsStyle="primary"
                            onClick={ this.handleSignOut }>
                            <span>Sign out</span>
                        </Button>
                    </Panel>
                </div>
            );
        } else {
            formContent = (
                <div style={{position: 'relative'}}>
                    {status === 'start' ?
                        <Spinner></Spinner> : null
                    }
                    {status === 'error' ?
                        <AlertDismissable
                            bsStyle="danger"
                            onDismiss={ this.handleCleanError }>
                            <p>
                                <strong>{error}</strong>
                            </p>
                        </AlertDismissable> : null
                    }
                    <form>
                        <Panel
                            header={ <h3 className="text-center"><span>Sign In</span></h3> }
                            bsStyle="primary">
                            <InputTextStateful
                                ref="usernameInput"
                                type="text"
                                hasFeedback={ false }
                                value={_username}
                                placeholder="Enter user name"
                                label="User name"/>
                            <InputTextStateful
                                ref="passwordInput"
                                type="password"
                                hasFeedback={ false }
                                placeholder="Enter password"
                                label="Password"/>

                            <div style={ {    "marginBottom": "1.5em"} }>
                                <CheckboxStateful
                                    ref="rememberMeCheckbox"
                                    value={rememberMe}
                                    id="rememberMeCheckbox"/>
                                <label
                                    style={ {    "marginLeft": "0.5em"} }
                                    htmlFor="rememberMeCheckbox">
                                    Remember me
                                </label>
                            </div>
                            <Button
                                bsStyle="primary"
                                type="submit"
                                onClick={ this.handleSignIn }>
                                <span>Sign In</span>
                            </Button>
                        </Panel>
                    </form>
                </div>
            );
        }
        return (<div {...this.props}>
                { formContent }
            </div>
        );
    }
}

SignInOutForm.contextTypes = {
    router: PropTypes.object
};
SignInOutForm.defaultProps = {
    routeAfterSignIn: null,
    routeAfterSignOut: null
};
SignInOutForm.propTypes = {
    routeAfterSignIn: PropTypes.string,
    routeAfterSignOut: PropTypes.string
};

export default connect(selectorSignInOutForm)(SignInOutForm);
