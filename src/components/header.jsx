import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'

const Header = () => (
    <div className="App-header container-full">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React todo app</h1>

        <div className="center-text routes">
            <NavLink to="/" activeClassName="active" exact={true}>App</NavLink>
            <NavLink to="/about" activeClassName="active">About me</NavLink>
        </div>
    </div>
)

export default Header;