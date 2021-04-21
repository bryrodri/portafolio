import React, { Component } from 'react'

import './item.css'

export default class Item extends Component {
    objeto= this.props.item

    styleComplete(x){

        return {
            width:x,
            
        }
    }
    render() {
        return (
            <div className="it-hab-cont">
                <div className="it-hab-titulo">
                    <h2>{this.objeto.titulo}</h2>
                </div>

                {this.objeto.destrezas.map((x,index)=>{

                   return <div className="bar" key={index}>
                        <div className="info">
                            <span>{x.nombre}</span>
                        </div>
                        <div className="progress-line">
                            <span style={this.styleComplete(x.conocimientos)} numero={x.conocimientos} ></span>
                        </div>
                    </div>


                })}
               


            </div>
        )
    }
}
