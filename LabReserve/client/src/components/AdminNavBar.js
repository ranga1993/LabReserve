import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import {getFromStorage} from "../utils/storage";

class AdminNavBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            token: '',
            Status: '',
            redirect: '',
            isLoading: false
        }

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(){
        this.setState({
            isLoading: true
        });
        const obj = getFromStorage('the_main_app');
        if(obj && obj.token){
            const {token} = obj;
            axios.get('http://localhost:5000/logout?token='+token)
                .then((response) => {
                    this.setState({
                        token: '',
                        Status: '',
                        redirect: true,
                        isLoading: false
                    })
                });
        }
    }
    render(){
        const {redirect} = this.state;

        if(redirect){
            return <Redirect to="/"/>;
        }
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Lab Reservation</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Function</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button type="button" className="btn btn-link" onClick={this.onLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default AdminNavBar;