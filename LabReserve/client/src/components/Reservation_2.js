import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
import axios from 'axios';
import DatePick from "./DatePick";

class Reservation_2 extends Component{
    constructor(props){
        super(props);

        this.state = {available: '', message: '', clsName: '', vsble: 'row invisible'};

        this.availability = this.availability.bind(this);
        this.submitReserve = this.submitReserve.bind(this);
        // this.onChangeSubjectName = this.onChangeSubjectName.bind(this);
        // this.onChangeSubjectCode = this.onChangeSubjectCode.bind(this);
    }

    // onChangeSubjectName(event){
    //     this.setState({
    //         subjectName: event.target.value
    //     })
    // }
    //
    // onChangeSubjectCode(event){
    //     this.setState({
    //         subjectCode: event.target.value
    //     })
    // }

    availability(event){
        this.setState({available: true});

        var date = "<"+document.getElementById('pickDate').value+">";
        var time = document.getElementById('timePeriod').value;
        var labName = document.getElementById('labName').value;

        const data = {
            date: date,
            time: time,
            labName: labName
        };

        axios.post('http://localhost:5000/availabilityCheck', {data})
            .then((response)=>{
                if(response.data != null){
                    this.setState({message: "Sorry..This time slot is not available!", clsName: "alert alert-warning text-center", vsble: 'row invisible'})
                }
                else{
                    this.setState({message: "This time slot is available.. You can reserve it!", clsName: "alert alert-success text-center", vsble: 'row'})
                }
            })
    }

    submitReserve(event){

        var date = "<"+document.getElementById('pickDate').value+">";
        var time = document.getElementById('timePeriod').value;
        var labName = document.getElementById('labName').value;
        var subjectName = document.getElementById('subjectName').value;
        var subjectCode = document.getElementById('subjectCode').value;
        // var subjectName = this.state.subjectName;
        // var subjectCode = this.state.subjectCode;

        const data = {
            date: date,
            time: time,
            labName: labName,
            subjectName: subjectName,
            subjectCode: subjectCode
        };

        axios.post('http://localhost:5000/reserve', {data})
            .then((response) => {

            })
        this.setState({message: 'You have successfully reserve the time slot!', clsName: 'alert alert-info text-center', vsble: 'row invisible'})
    }

    render(){
        return(
            <div>
                <div className="card mb-3">
                    <div className="card-header">
                        Search Details
                    </div>
                    <div className="card-body">
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Choose Date</label>
                                            <DatePick/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Choose Lab</label>
                                            <select className="form-control" id="labName" name="labName">
                                                <option value="Lab A">Lab A</option>
                                                <option value="Lab B">Lab B</option>
                                                <option value="Lab C">Lab C</option>
                                                <option value="Lab D">Lab D</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Choose Time period</label>
                                            <select className="form-control" id="timePeriod" name="timePeriod">
                                                <option value="08.00-09.00">08.00-09.00</option>
                                                <option value="09.00-10.00">09.00-10.00</option>
                                                <option value="10.00-11.00">10.00-11.00</option>
                                                <option value="11.00-12.00">11.00-12.00</option>
                                                <option value="12.00-13.00">12.00-13.00</option>
                                                <option value="13.00-14.00">13.00-14.00</option>
                                                <option value="14.00-15.00">14.00-15.00</option>
                                                <option value="15.00-16.00">15.00-16.00</option>
                                                <option value="16.00-17.00">16.00-17.00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>Check</label>
                                            <button type="button" className="btn btn-primary" onClick={this.availability}>Check Availability</button>
                                        </div>
                                    </div>
                                </div>
                                {this.state.available && <div className="row">
                                    <div className="col-md-12">
                                        <div className={this.state.clsName}>
                                            {this.state.message}
                                        </div>
                                    </div>
                                </div>}

                                <div className={this.state.vsble}>
                                    <div className="col-md-12">
                                        <div align="center">
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#reserveModal">Reserve Now</button>

                                            <div className="modal fade" id="reserveModal" role="dialog">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Comfirmation of Reservation</h4>
                                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                                <div>
                                                                    <label>Enter Subject Name:</label>
                                                                    <input type="text" className="form-control" id="subjectName" placeholder="Enter Subject Name"/>
                                                                </div>
                                                                <div>
                                                                    <label>Enter Subject Code:</label>
                                                                    <input type="text" className="form-control" id="subjectCode" placeholder="Enter Subject Code"/>
                                                                </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.submitReserve}>Submit Reservation</button>
                                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reservation_2;