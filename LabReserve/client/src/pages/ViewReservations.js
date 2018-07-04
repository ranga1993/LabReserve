import React, { Component } from 'react';
import UserNavBar from "../components/UserNavBar";
import Footer from "../components/Footer";
import ReserveView from "../components/ReserveView";

class ViewReservations extends Component{
    render(){
        return(
            <div>
                <UserNavBar/>
                <ReserveView/>
                <Footer/>
            </div>
        )
    }
}

export default ViewReservations;