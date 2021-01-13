import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
    state = {
        isClassOn: false,
        isDisplay: false
    }

    componentDidUpdate() {
        
    }

    render() {
        
        return(
            <div className="compcont">
                <nav>
                    <h1>
                        <span id="one">Wri</span>
                        <span id="two">x</span>
                        <span id="three">ty</span>
                    </h1>
        
        
                    <div id ="menu" className={ this.state.isClassOn ? "change" : "noChange"} onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>
                        <p id="bar1"></p>
                        <p id="bar2"></p>
                        <p id="bar3"></p>
                    </div>
        
                    <ul className="nav-links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/store">Stores</NavLink></li>
                        <li><NavLink to="./contact">Contact</NavLink></li>
                    </ul>
        
                </nav>

                <div id="navmenu" className={ this.state.isDisplay ? "showNav" : "hideNav"}>
                    <ul className="nav-linksx">
                        <li><NavLink to="/" onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>About</NavLink></li>
                        <li><NavLink to="/store" onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>Stores</NavLink></li>
                        <li><NavLink to="./contact" onClick={ () => this.setState({isDisplay: !this.state.isDisplay})}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            
        )
    }
   
}

export default Navbar












