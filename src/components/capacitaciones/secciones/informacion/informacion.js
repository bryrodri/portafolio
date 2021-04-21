import React, { Component } from 'react'

import './informacion.css'
import { IoIosCloudDownload } from "react-icons/io";

export default class Informacion extends Component {
    render() {
        return (
            <div className="principal">
                <div className="seccion-informacion">
                    <div className="inf-contenedor">

                        <div className="inf-titulo">
                            <h2>Descripción</h2>
                        </div>

                        <div className="inf-contenido">
                            <p>
                            Soy Bryan Rodríguez tengo 24 años, resido en Venezuela y soy estudiante de décimo semestre en la Universidad Católica Andres Bello en la carrera de ingeniería informática, cuento con experiencia moderada en el ámbito profesional ya que he tenido la oportunidad de participar en algunos proyectos, actualmente estoy a la busca de nuevas oportunidades profesionales para obtener más experiencia y desarrollar mis capacidades.
                            </p>

                            <p>
                            A nivel profesional puedo aportar gran valor al proyecto que tengas en mente debido a la gran variedad de herramientas que puedo manejar, a nivel de Front-End puedo convertir tu diseño PDS a HTML, CSS y JavaScript, ademas puedo desarrollar aplicaciones web con herramientas de alto nivel en este ambiente, es decir con ReacJs o Angular, por otro lado también estoy capacitado para desarrollar aplicaciones de escritorio con las herramientas antes nombradas.
                            </p>
                            <p>
                            Pero si buscas un desarrollador Back-end también puedo ayudarte, ya que tengo conocimientos en NodeJS, JavaEE, PHP y Python, ademas se sobre gestión de bases de datos en MySQL, PostgreSQL, Oracle, SQLite y MongoDB.
                            </p>

                            <p>
                            Con lo anteriormente nombrado estoy capacitado para desarrollar aplicaciones web y de escritorio de manera practica, analizar tus requerimientos y convertirlos en diseños funcionales y lógicos, y ademas transformar tus requisitos en estructuras de datos. 
                            </p>


                        </div>




                    </div>

                    <div className="cv-container">

                        <a href="https://drive.google.com/file/d/1FJgs_4ghF0QgcrQ0cLREgx9Q-n-aNyof/view?usp=sharing" target="_blank" rel="noreferrer">
                            <div>
                            <IoIosCloudDownload size={17}  />
                            <span> Ver CV</span>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        )
    }
}
