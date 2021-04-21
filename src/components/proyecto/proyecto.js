import React, { Component } from 'react'
import { Redirect } from "react-router-dom";



import './proyecto.css'

import Slide from './slide/slide'
import Tags from './tags/tags'
import Descripcion from './descripcion/descripcion'
import Enlaces from './enlaces/enlaces'

import proyectos from '../../samples/proyectos.json'


export default class Proyecto extends Component {

    
    state={
        id:this.props.match.params.id,
        proyecto:{
            images:[],
            tags:[],
            enlaces:[],
            descripcion:""
        },
        status:true
    }

    async componentDidMount(){
        window.scrollTo({
            top:0
        })
        if(proyectos.filter(x=>Number(x.id)===Number(this.state.id))[0]){
            this.setState({
            
                proyecto:proyectos.filter(x=>Number(x.id)===Number(this.state.id))[0]
            })
            Number()
        }
        else{
            console.log("hola")
            this.setState({status:false})


            
        }

        // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        // const data = await res.json()
        // this.setState({post:data})
        // console.log(data)


    }

    render() {

        if(!this.state.status){
            return <Redirect to="/404" />
        }else{

        
        return (
            <div className="principal principal-pages">
                <div className="proy-secction">

                    <div className="proy-title">
                        <h2>{this.state.proyecto.nombre}</h2>
                    </div>

                    <div className="proy-container proyecto-container">
                        <Slide images={this.state.proyecto.images}></Slide>  
                        <Enlaces enlaces={this.state.proyecto.enlaces} ></Enlaces>
                        <Tags tags={this.state.proyecto.tags} ></Tags>
                        <Descripcion descripcion={this.state.proyecto.descripcion}></Descripcion>
                    </div>
                </div>
            </div>
        )
    }
    }
}
