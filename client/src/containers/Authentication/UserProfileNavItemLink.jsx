import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavItemLink } from '../../components/BootstrapNavigation';

class UserProfileNavItemLink extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        const {username, routeUserProfile} = this.props;
        return (
            <NavItemLink
                {...this.props}
                to={routeUserProfile ? routeUserProfile : '/'}>
                { username ? <span>{'User profile: ' + username}</span> : <span>Sign In</span> }
            </NavItemLink>
        );
    }
}
function mapStateToProps(state) {
    const {userAccount: {username}} = state;
    return {
        username
    };
}

UserProfileNavItemLink.contextTypes = {
    router: PropTypes.object
};

UserProfileNavItemLink.propTypes = {
    routeUserProfile: PropTypes.string
};

UserProfileNavItemLink.defaultProps = {
    routeUserProfile: null
};

export default connect(mapStateToProps)(UserProfileNavItemLink);
