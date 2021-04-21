import React, { Component } from 'react'
import "./nav.css"



import { MdHome, MdDashboard, MdGrade, MdPerson } from "react-icons/md";

import {  NavLink } from 'react-router-dom';



export default class Nav extends Component {
    
    
    render() {
        return (
            
            <div className="nav">
                
                <div className="navbar">
                    <div className="nav-cont">
                    
                        <NavLink to="/Home" activeClassName='nav-button-activate' className="nav-button"> <MdHome size={17}  /><span className="text-nav">Inicio</span></NavLink> 
                    </div>
                    <div className="nav-cont">
                        <NavLink to="/SobreMi" activeClassName='nav-button-activate' className="nav-button"> <MdPerson size={18}  /><span className="text-nav">Sobre mi</span> </NavLink> 
                    </div>
                    <div className="nav-cont">
                        <NavLink to="/Proyectos" activeClassName='nav-button-activate' className="nav-button"> <MdDashboard size={17}  /> <span className="text-nav">Proyectos</span> </NavLink> 
                    </div>
                    <div className="nav-cont">
                        <NavLink to="/Cursos" activeClassName='nav-button-activate' className="nav-button"> <MdGrade size={17}/>  <span className="text-nav">Cursos</span></NavLink> 
                    </div>
                </div>
            
            </div>
        )
    }
}
