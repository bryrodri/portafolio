import React from 'react'

import './enlaces.css'

import { IoLogoYoutube, IoIosLink } from "react-icons/io";


const Enlaces = (props) => {
    return (
        <div className="enlaces-container">
            {
                props.enlaces.map(x=>{

                    if(x.tipo==="youtube"){
                       return <a className="youtube" href={x.direccion} target="_blank" rel="noreferrer" key={x.id}>
                            <IoLogoYoutube size={25}  />
                        </a>
                    }
                    else{
                        return  <a className="enlaces-item" href={x.direccion} target="_blank" rel="noreferrer" key={x.id}>
                        <IoIosLink size={25}  />
                            </a>


                    }


                })

            }
        </div>
    )
}

export default Enlaces
