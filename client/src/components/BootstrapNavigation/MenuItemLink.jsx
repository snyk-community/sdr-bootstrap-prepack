import React, { Component, PropTypes } from 'react';
import { MenuItem } from 'react-bootstrap';

class MenuItemLink extends Component {

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
        const {to} = this.props;
        return (<MenuItem
                          {...this.props}
                          eventKey="1"
                          onClick={ this.handleOnClick } >
                {this.props.children}
            </MenuItem>
            );
    }
}

MenuItemLink.contextTypes = {
    router: PropTypes.object
};
MenuItemLink.defaultProps = {
    to: '/'
};
MenuItemLink.propTypes = {
    to: PropTypes.string
};

export default MenuItemLink;
