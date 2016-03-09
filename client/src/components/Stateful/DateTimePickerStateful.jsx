import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { DateTimePicker } from 'react-widgets';

function isValidDate(value){
    if(_.isDate(value)){
        return !isNaN(value.getTime());
    } else {
        return false;
    }
}

class DateTimePickerStateful extends Component {

    constructor(props, content) {
        super(props, content);
        const { value } = props;
        this.state = {
            value: isValidDate(value) ? value : new Date()
        }
    }
    componentWillReceiveProps(nextProps){
        const { value } = nextProps;
        this.setState({
            value: isValidDate(value) ? value : new Date()
        });
    }

    getValue(){
        const { value } = this.state;
        return isValidDate(value) ? value : new Date();
    }

    render() {
        let { value } = this.state;
        return (<DateTimePicker
                {...this.props}
                value={value}
                onChange={(value, text) => { this.setState({ value: value }); } }/>
        );
    }
}
DateTimePickerStateful.defaultProps = {
    value: null
};
DateTimePickerStateful.propTypes = {
    value: PropTypes.any
};
export default DateTimePickerStateful;
