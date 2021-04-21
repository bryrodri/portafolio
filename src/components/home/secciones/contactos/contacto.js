import React, { Component } from 'react'

import { AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp,AiTwotoneMail } from "react-icons/ai";

import { BiSend } from "react-icons/bi";

import './contacto.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';




export default class Contacto extends Component {

    state={
        formState:false

    }

    onSubmit= (e) => {
        e.preventDefault()

        this.setState({formState:true})

        


        var name=document.getElementById("name_input").value;
        var email=document.getElementById("email_input").value;
        var subject= document.getElementById("subject_input").value;
        var mesage= document.getElementById("message_input").value

        var objeto={
            name:name,
            email:email,
            subject:subject,
            mesage:mesage
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objeto)
        };
        
        
        fetch('http://bryrodri.educationhost.cloud/php/email.php', requestOptions)
        .then(response =>
        { 
            if(response.ok){
                response.json()
                this.setState({formState:false})
                NotificationManager.success('Success message', 'Correo enviado')
            }
            else{
                throw new Error('Something went wrong ...');
            }
        })
        .then(data => console.log(data))
        .catch(err=>{
            console.log(err)
            this.setState({formState:false})
            NotificationManager.warning('Uppss!', 'Error al enviar correo', 3000);
        });
        

       
        
    }

    render() {
        return (
            <div className="principal-contacto">
                <div className="seccion">
                    <div className="contactos">

                        <div className="subtitle">
                            <h2>Donde Ubicarme</h2>
                        </div>
                        
                        <div className="item">
                            <a href="https://www.instagram.com/bryrodri/?hl=es-la" target="_blank" rel="noreferrer" ><AiFillInstagram size={40}/> <span>@bryrodri</span> </a>
                        </div>

                        <div className="item">
                            <a href="https://www.linkedin.com/in/bryan-rodriguez-647563149/" target="_blank" rel="noreferrer" ><AiFillLinkedin size={40}/> <span>Bryan Rodriguez</span>  </a>
                        </div>

                        <div className="item">
                            <a href="https://wa.link/mop3jp" target="_blank" rel="noreferrer" ><AiOutlineWhatsApp size={40}/> <span> +5804162654803</span> </a>
                        </div>

                        <div className="item i-email">
                            <a href="mailto:bryrodri1@gmail.com" target="_blank" rel="noreferrer" ><AiTwotoneMail size={40}/> <span>bryrodri1@gmail.com</span> </a>
                        </div>

                    </div>

                    <div className="formulario">
                        <div className="subtitulo">
                            <h2>Enviame un mensaje</h2>
                        </div>

                        <form onSubmit={this.onSubmit}>

                            <div className="name">
                                <label for="name"></label>
                                <input type="text" disabled={(this.state.formState)? "disabled" : ""} placeholder="Mi nombre es" name="name" id="name_input" required />
                            </div>

                            <div class="email">
                                <label for="email"></label>
                                <input type="email" disabled={(this.state.formState)? "disabled" : ""} placeholder="Mi correo es " name="email" id="email_input" required/>
                            </div>

                            <div className="subject">
                                <label for="subject"></label>
                                <select disabled={(this.state.formState)? "disabled" : ""} placeholder="El asunto es.." name="subject" id="subject_input" required>
                                    <option disabled hidden selected>Asunto</option>
                                    <option value="Me gustaria iniciar un proyecto">Me gustaria iniciar un proyecto</option>
                                    <option value="Tengo una pregunta">Tengo una pregunta</option>
                                    <option value="Me gustaria hacer una propuesta">Me gustaria hacer una propuesta</option>
                                </select>
                            </div>

                            <div className="message">
                                <label for="message"></label>
                                <textarea disabled={(this.state.formState)? "disabled" : ""} name="message" placeholder="Me gustaria escribirte acerca de.." id="message_input" cols="30" rows="5" required></textarea>
                            </div>

                            
                            
                            <button disabled={(this.state.formState)? "disabled" : ""} className="send-buton" type="submit"> <BiSend size={25}/></button>
                            

                        </form>
                        <NotificationContainer/>

                        
                    </div>

                </div>
            </div>
        )
    }
}
