import React, { Component } from 'react';
import UserNavBar from "../components/AdminNavBar";
import Footer from "../components/Footer";

class AdminPage extends Component{
    render(){
        return(
            <div>
                <UserNavBar/>
                <h1>Admin Page</h1>
                <Footer/>
            </div>
        )
    }
}

export default AdminPage;