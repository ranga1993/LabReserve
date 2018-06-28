import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";

class Reserve extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Reservation/>
                <Footer/>
            </div>
        )
    }
}

export default Reserve;