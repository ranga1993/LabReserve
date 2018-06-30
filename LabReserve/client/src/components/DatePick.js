import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class DatePick extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date){
        this.setState({
            startDate: date
        });
    }

    render(){
        return <DatePicker
            dateFormat="YYYY/MM/DD"
            selected={this.state.startDate}
            onChange={this.handleChange}
            minDate={moment()}
            maxDate={moment().add(15, "days")}
            placeholderText="Select a date between today and 30 days in the future"
            className="form-control"
            name="labDate"
            id="pickDate"
        />;
    }
}

export default DatePick;