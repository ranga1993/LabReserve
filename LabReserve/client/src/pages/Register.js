import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Registration from "../components/Registration";

class Register extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Registration/>
                <Footer/>
            </div>
        )
    }
}

export default Register;