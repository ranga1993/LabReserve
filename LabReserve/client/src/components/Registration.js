import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',

            SignUpMessage: '',
        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeFirstName(event){
        // console.log(event.target.value);
        this.setState({
            FirstName: event.target.value
        })
    }
    onChangeLastName(event){
        this.setState({
            LastName: event.target.value
        })
    }
    onChangeEmail(event){
        this.setState({
            Email: event.target.value
        })
    }
    onChangePassword(event){
        this.setState({
            Password: event.target.value
        })
    }

    onSubmit(){
        // console.log(this.state)
        var data = this.state;
        // console.log(data)
        axios.post('http://localhost:5000/register', {data:data})
            .then((response) => {
                this.setState({
                    SignUpMessage: response.data.message,
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Password: '',
                })
                console.log(this.state.SignUpMessage);

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
                                    (this.state.SignUpMessage) ? (
                                        <div className="alert alert-primary" role="alert">
                                            {this.state.SignUpMessage}
                                        </div>
                                    ) : null
                                }
                            </div>
                            <h1>Register</h1>
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" id="exampleInputFirstName" placeholder="Enter First Name" onChange={this.onChangeFirstName} value={this.state.FirstName}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="email" className="form-control" id="exampleInputLastName" placeholder="Enter Last Name" onChange={this.onChangeLastName} value={this.state.LastName}/>
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" onChange={this.onChangeEmail} value={this.state.Email}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" onChange={this.onChangePassword} value={this.state.Password}/>
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

export default Registration;