import React, { Component } from 'react'

import './capacitaciones.css'

// Secciones
import Header from './secciones/header/header'
import Informacion from './secciones/informacion/informacion'
import Habilidades from './secciones/habilidades/habilidades'

export default class Capacitaciones extends Component {
    
    async componentDidMount(){
        window.scrollTo({
            top:0
        })

    }
    
    render() {
        return (
            <div className="principal head-section sec-cap principal-pages">
                
                <Header></Header>
                <Informacion></Informacion>
                <Habilidades></Habilidades>
            </div>
        )
    }
}
