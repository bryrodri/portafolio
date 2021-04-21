import React, { Component } from 'react'
import './habilidades.css'

import Items from '../../../../samples/habilidades.json'

import Item from './item/item'

export default class Habilidades extends Component {

    state={
        items:Items
    }

    render() {
        return (
            <div className="principal">

                <div className="seccion-habilidades">

                    <div className="hab-contenedor">
                        {this.state.items.map((x)=>
                            <Item item={x} key={x.id}></Item>
                        )}

                    </div>
                </div>

            </div>
        )
    }
}
