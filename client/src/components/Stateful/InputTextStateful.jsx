import React, { Component, PropTypes } from 'react';
import { Input } from 'react-bootstrap';

class InputTextStateful extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {
            value: this.props.value
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value
        });
    }
    handleOnChange() {
        this.setState({
            value: this.refs.inputElement.getValue()
        });
    }
    getValue(){
        return this.state.value;
    }
    render() {
        const {value} = this.state;
        return (
            <Input
                {...this.props}
                ref="inputElement"
                value={ value }
                onChange={ this.handleOnChange }/>
        );
    }
}
InputTextStateful.defaultProps = {
    value: ''
};
InputTextStateful.propTypes = {
    value: PropTypes.any
};

export default InputTextStateful;
