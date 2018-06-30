import React, { Component } from 'react';
import UserNavBar from "../components/UserNavBar";
import Footer from "../components/Footer";

class UserPage extends Component{
    render(){
        return(
            <div>
                <UserNavBar/>
                <h1>User Page</h1>
                <Footer/>
            </div>
        )
    }
}

export default UserPage;