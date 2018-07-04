import React, { Component } from 'react';
import AdminNavBar from "../components/AdminNavBar";
import Footer from "../components/Footer";
import ReserveView from "../components/ReserveView";

class AdminReserve extends Component{
    render(){
        return(
            <div>
                <AdminNavBar/>
                <ReserveView/>
                <Footer/>
            </div>
        )
    }
}

export default AdminReserve;