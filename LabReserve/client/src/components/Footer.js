import React, { Component } from 'react';
import './style.css';

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="myfooter">
                    <div className="footer-copyright text-center py-3">2018 copyright:
                        <a href="#">Ranga Prasad</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;