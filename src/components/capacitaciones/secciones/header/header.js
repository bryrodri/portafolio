import React, { Component } from 'react'

//Estilos
import './header.css'

//Imagenes
import Foto from '../../../../assets/foto.jpeg'

export default class Header extends Component {
    render() {
        return (
            <div className="principal ">
                <div className="img-container">
                    <img src={Foto} alt="Foto bryan rodriguez" />
                </div>
            </div>
        )
    }
}
