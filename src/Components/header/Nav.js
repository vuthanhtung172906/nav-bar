import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Nav extends Component {
    state = {
        toggle : false
    }
    menuToggle = ()=>{
        this.setState({
            toggle : !this.state.toggle
        })
    };
    render() {
        return (
            <>
            <ul className = {this.state.toggle ? "toggle" : ""}>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/blog">Blog</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/login">Login/Resgister</Link> </li>
                <li className="close" onClick = {this.menuToggle}>X</li>
            </ul>
            <div className="menu" onClick = {this.menuToggle}>Menu</div>
            </>
        )
    }
}

export default Nav
