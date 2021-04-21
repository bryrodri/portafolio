import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom';

import './itemProyecto.css'

export default class ItemProyecto extends Component {
    state={
        proyecto:this.props.proyecto,
        
    }

    render() {
        return (
            <NavLink to={`/Proyecto/${this.state.proyecto.id}`} activeClassName='nav-button-activate' className="nav-button">  
            <div className="ip-secction">
                <div className="ip-images">
                    <img src={this.state.proyecto.imgPrincipal} alt="miniatura de proyecto"></img>
                </div>
                
                <div className="border-ip">
                    <div className="ip-titulo">
                        <h3>{this.state.proyecto.nombre}</h3>
                    </div>
                    <div className="ip-tags">
                        {
                            this.state.proyecto.tags.map(x=>{

                                return <div className="ip-tag" key={x.id} >{x.tag}</div>
                            })
                        }

                    </div>
                </div>
                
            </div>
            </NavLink> 
        )
    }
}
