import React, { Component } from 'react';
import axios from 'axios';

class Reservation extends Component{
    constructor(props){
        super(props);
        this.state={
            SubjectName: '',
            SubjectCode: '',
            StartingTime: '',
            EndingTime: '',

            SuccessMessage: '',
        };

        this.onChangeSubjectName = this.onChangeSubjectName.bind(this);
        this.onChangeSubjectCode = this.onChangeSubjectCode.bind(this);
        this.onChangeStartingTime = this.onChangeStartingTime.bind(this);
        this.onChangeEndingTime = this.onChangeEndingTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeSubjectName(event){
        this.setState({
            SubjectName: event.target.value
        })
    }
    onChangeSubjectCode(event){
        this.setState({
            SubjectCode: event.target.value
        })
    }
    onChangeStartingTime(event){
        this.setState({
            StartingTime: event.target.value
        })
    }
    onChangeEndingTime(event){
        this.setState({
            EndingTime: event.target.value
        })
    }
    onSubmit(){
        var data = this.state;
        axios.post('http://localhost:5000/reserve', {data:data})
            .then((response) => {
                this.setState({
                    SuccessMessage: response.data.message,
                    SubjectName: '',
                    SubjectCode: '',
                    StartingTime: '',
                    EndingTime: '',
                })
                console.log(this.state.SuccessMessage);
            })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <br/>
                            <div className="row">
                                {
                                    (this.state.SuccessMessage) ? (
                                        <div className="alert alert-primary" role="alert">
                                            {this.state.SuccessMessage}
                                        </div>
                                    ) : null
                                }
                            </div>
                            <h1>Reservation</h1>
                            <form>
                                <div className="form-group">
                                    <label>Subject Name</label>
                                    <input type="text" className="form-control" id="subjectName" placeholder="Enter Subject Name" onChange={this.onChangeSubjectName} value={this.state.SubjectName}/>
                                </div>
                                <div className="form-group">
                                    <label>Subject Code</label>
                                    <input type="text" className="form-control" id="subjectCode" placeholder="Enter Subject Code" onChange={this.onChangeSubjectCode} value={this.state.SubjectCode}/>
                                </div>
                                <div className="form-group">
                                    <label>Subject Code</label>
                                    <input type="text" className="form-control" id="subjectCode" placeholder="Enter Subject Code" onChange={this.onChangeSubjectCode} value={this.state.SubjectCode}/>
                                </div>
                                <div className="form-group">
                                    <label>Starting Time</label>
                                    <input type="text" className="form-control" id="startingTime" placeholder="Enter Starting Time" onChange={this.onChangeStartingTime} value={this.state.StartingTime}/>
                                </div>
                                <div className="form-group">
                                    <label>Ending Time</label>
                                    <input type="text" className="form-control" id="endingTime" placeholder="Enter Ending Time" onChange={this.onChangeEndingTime} value={this.state.EndingTime}/>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                            </form>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reservation;