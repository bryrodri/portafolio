import React from 'react'

import './tags.css'

const Tags = (props) => {
    return (
        <div className="tag-secction">
            {
                props.tags.map(x=>{
                    return <div className="ip-tag tag-secction-ip"> {x.tag} </div>

                })

            }
            
        </div>
    )
}

export default Tags
