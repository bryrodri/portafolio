import React, { Component } from 'react'
import './home.css'


//Secciones
import Contactos from './secciones/contactos/contacto'
import Principal from './secciones/principal/principal'
import Fortalezas from './secciones/fortalezas/fortalezas'


export default class Home extends Component {

    async componentDidMount(){
        window.scrollTo({
            top:0
        })

    }

    render() {
        return (

            <div className="principal principal-pages">


                <Principal></Principal>
                <Fortalezas></Fortalezas>
                <Contactos></Contactos>      
            </div>
        )
    }
}



