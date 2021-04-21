import React, { Component } from 'react'

import { MdStorage, MdWeb, MdDone} from "react-icons/md";
import {IoIosCloud} from "react-icons/io";

//Estilos
import './fortalezas.css'

export default class Fortalezas extends Component {
    render() {
        return (
            <div >
                <div className="fortaleza-seccion">

                    <div className="fortaleza-item">

                        <div className="fortaleza-head">
                            <span className="fortalezas-text-head">
                                <MdWeb size={25}/>
                                Frontend
                            </span>
                        </div>
                        
                        <div className="fortaleza-content">

                            <div  className="fc-item">
                                <span> <MdDone size={20}/></span>
                                <span>Desarrollo de aplicaciones web con Angular y reactjs</span>
                            </div>

                            <div  className="fc-item">
                                <span> <MdDone size={20}/></span>
                                <span>Conversion de PSD a HTML, CSS y JavaScript</span>
                            </div>

                            <div  className="fc-item">
                                <span> <MdDone size={20}/></span>
                                <span>Creacion de aplicaciones con Wordpress y Woocomerse</span>
                            </div>

                        </div>

                        <a className="line-animation" href="http://www.bryrodri.live/" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </a> 
                    </div>
                    
                    <div className="fortaleza-item">
                        <div className="fortaleza-head">
                            <span className="fortalezas-text-head">
                                <IoIosCloud size={25}/>
                                Backend
                            </span>
                        </div>
                        <div className="fortaleza-content">

                            <div  className="fc-item">
                                <span> <MdDone size={20}/></span>
                                <span>Desarrollo de aplicaciones web en Java, Python y JavaScript(NodeJS)</span>
                            </div>

                            <div  className="fc-item">
                                <span> <MdDone size={20}/></span>
                                <span>Traduccion de requisitos a diseños funcionales y logicos</span>
                            </div>

                        </div>

                        <a className="line-animation" href="http://www.bryrodri.live/" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </a> 
                    </div>

                    <div className="fortaleza-item">
                        <div className="fortaleza-head">
                            <span className="fortalezas-text-head">
                                <MdStorage size={25}/>
                                Base de datos
                            </span>
                        </div>

                        <div className="fortaleza-content">

                            <div  className="fc-item">
                                <span> <MdDone size={20}/></span>
                                <span>Traduccion de requisitos a estructuras de datos</span>
                            </div>

                            <div  className="fc-item">
                                <span> <MdDone size={20}/></span>
                                <span>MySQL, PostgreSQL, Oracle, Sqlite y MongoDB</span>
                            </div>
                        </div>
                        
                        <a className="line-animation" href="http://www.bryrodri.live/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </a> 
                    </div>
                </div>
            </div>
        )
    }
}
