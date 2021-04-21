import React from 'react'

import './descripcion.css'

const Descripcion = (props) => {
    return (
        <div className="des-container-p">
            <div className="des-text-seccion">
                <p>{props.descripcion}</p>
            </div>
            
        </div>
    )
}

export default Descripcion
