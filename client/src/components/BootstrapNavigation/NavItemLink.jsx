import React, { Component, PropTypes } from 'react';
import { NavItem } from 'react-bootstrap';

class NavItemLink extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.context.router.push(this.props.to);
    }

    render() {
        return (<NavItem
                         {...this.props}
                         href="#"
                         onClick={ this.handleOnClick }>
                    {this.props.children}
                </NavItem>
            );
    }
}

NavItemLink.contextTypes = {
    router: React.PropTypes.object
};

NavItemLink.propTypes = {
    to: PropTypes.string
};

NavItemLink.defaultProps = {
    to: '/'
};

export default NavItemLink;
