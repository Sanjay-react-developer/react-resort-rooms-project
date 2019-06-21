import React, { Component } from 'react'
import logo from '../images/logo.JPG';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {

state={
    isOpen:false
}
handleToggler = () => {
    this.setState({isOpen:!this.state.isOpen})
}
    render() {
        return (
            <nav className="Navbar" >
                <div className="nav-center" >  
                    <div className="nav-header"> 
                        <Link to="/">
                            <img src={logo} alt="Resort"/>
                        </Link>
                        <button className="nav-btn" onClick={this.handleToggler}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav": "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms/">Rooms</Link>
                        </li>
                        </ul>    
                 </div>
               
            </nav>
        )
    }
}
