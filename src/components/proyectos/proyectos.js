import React, { Component } from 'react'


import proyectos from '../../samples/proyectos.json'

import './proyecto.css'


import ItemProyecto from './item/itemProyecto'

export default class Proyectos extends Component {
    state={
        proyectos:proyectos
    }

    async componentDidMount(){
        window.scrollTo({
            top:0
        })

    }

    render() {
        return (
            <div className='principal principal-pages'>

                <div className="proy-secction">

                    <div className="proy-title">
                        <h2>Mis proyectos</h2>
                    </div>

                    <div className="proy-container">

                        {
                            this.state.proyectos.map(x=>{
                                return <ItemProyecto proyecto={x} key={x.id}></ItemProyecto>

                            })
                        }

                    </div>
                </div>

            </div>
        )
    }
}
