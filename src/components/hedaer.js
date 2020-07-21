import React from "react";
import illustration from '../imgs/undraw_portfolio_feedback_exfk.svg';
import Form from './contact.form';

export default() =>(
    <header className="bg-purple-600">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-white text-6xl">¡Hola! Soy Jazmín</h1>
                    <p className="text-xl font-light">Creo aplicaciones web y generador de contenido</p>
                </div>
                <img src={illustration} alt="Mujer mostrando perfil" style={{height: "300px"}}></img>
           </div>

            <div>
                <Form/>
            </div>
        </div>
    </header>
)