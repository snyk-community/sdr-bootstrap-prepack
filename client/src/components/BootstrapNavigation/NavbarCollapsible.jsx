import React, {Component, PropTypes} from 'react';
import { Navbar } from 'react-bootstrap';

class NavbarCollapsible extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(e) {
        e.preventDefault();
        e.stopPropagation();
        const { branding } = this.props;
        if(branding && branding.href && branding.href !== '#'){
            this.context.router.push(branding.href);
        }
    }
    render(){
        const { branding } = this.props;
        return (
            <Navbar {...this.props} >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href={branding.href} onClick={this.handleOnClick} >{branding.name}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.props.children}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
NavbarCollapsible.contextTypes = {
    router: PropTypes.object
};
NavbarCollapsible.propTypes = {
    branding: PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string
    })
};
NavbarCollapsible.defaultProps = {
    branding: {
        name: 'Brand',
        href: '#'
    }
};

export default NavbarCollapsible;
