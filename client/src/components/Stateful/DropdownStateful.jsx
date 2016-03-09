import React, { Component, PropTypes } from 'react';
import { DropdownList } from 'react-widgets';

class DropdownStateful extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {
            value: props.value
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value
        });
    }
    getValue(){
        return this.state.value;
    }

    render() {
        return (
            <DropdownList
                {...this.props}
                value={this.state.value}
                onChange={value => this.setState({ value })}
                />
        );
    }
}
DropdownStateful.defaultProps = {
    value: ''
};
DropdownStateful.propTypes = {
    value: PropTypes.any
};

export default DropdownStateful;
