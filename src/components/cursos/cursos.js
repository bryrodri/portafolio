
import React, { Component } from 'react'

import './cursos.css'

import CursoItem from './item/cursoItem'

import cursos from '../../samples/cursos.json'






export default class Cursos extends Component {
    
    constructor(props){
        super(props)
        this.mydiv = React.createRef()
      }
    
    async componentDidMount(){
        window.scrollTo({
            top:0
        })

    }

    state={
        image:cursos[0].foto,
        cursos:cursos,
        cursoSeleccionado:cursos[0]
    }

    stylesecction(){
        return {
            top:this.state.image==="" ? "0%" : "100%",
        }
    }

    butonAction=()=>{
        console.log("hola")
        var image={
            image:""
        }
        
        if(this.state.image===""){
             image={
                image:"hola"
            }
        }

        this.setState(image)
    }

    setImage=(id)=>{

        console.log(window.innerWidth)

        if(window.innerWidth>768){

        this.setState({image:"", cursoSeleccionado:null})
        var cursoSeleccionado=this.state.cursos.filter(x=>x.id===id)[0]
        setTimeout(()=> {
            this.setState({image:cursoSeleccionado.foto, cursoSeleccionado:cursoSeleccionado})
            console.log(cursoSeleccionado)
        }, 2000);
        }
        else{
            var cursoSeleccionado=this.state.cursos.filter(x=>x.id===id)[0]
            this.setState({image:cursoSeleccionado.foto, cursoSeleccionado:cursoSeleccionado})
        }


    }

    render() {
        return (
            
            <div className='principal principal-pages'>

  
                <div className="cursos-secction" id="curso-container" >

                    <div className="cursos-superior">

                            <div className="css-descripcion">
                                <h3>
                                    {this.state.cursoSeleccionado ? this.state.cursoSeleccionado.descripcion : "" }
                                </h3>
                            </div>
                            
                            <div className="css-image">
                                    <img src={this.state.image} className="img" alt="Certificado del curso"></img>
                            </div>
                            

                    </div>

                    <div id="curso-container-inferior"  className="cursos-inferior"  style={this.stylesecction()}>
                        <div className="ci-secction">
                            {this.state.cursos.map((x)=>
                                <CursoItem curso={x} key={x.id} setImage={this.setImage}></CursoItem>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
