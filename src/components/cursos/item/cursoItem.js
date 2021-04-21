import React, { Component } from 'react'

import './cursoItem.css'

export default class CursoItem extends Component {
 
    state={
        curso:this.props.curso

    }

    imageStyle(x){
       return{
        backgroundImage: 'url("'+x+'")',
 

       } 
    }
    render() {
        return (
            <div className="cursoItem-secction" onClick={this.props.setImage.bind(this,this.state.curso.id)}  style={this.imageStyle(this.state.curso.foto)} >
                <label className="CursoItemLabel">{this.state.curso.nombre}</label>
            </div>
        )
    }
}
