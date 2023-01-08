import React, { useContext } from "react";
import BuyerForm from "../registerForm/RegisterForm";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

export default async function Form() {
    
    const { dataUser , setDataUser } = useContext( UserContext );
    
    function handleChange( evt ) {
        const input = evt.target.name;
        const value = evt.target.value;
        setDataUser({
            ...dataUser,
            [ input ]: value
        })
    }
    
    async function handlerRegister(data) {
        await axios.post( 'http://localhost:8080/api/user/', 
            {
                data: data
            },
            {   
                headers:{
                    "Content-Type": "application/json"
                }
            }
        )        
    }

    return(
            <div className="flex flex-col items-center bg-violet-400 w-auto p-8">
                <h3 className="p-3 m-2 text-2xl text-white font-serif italic font-bold underline-offset-1">Registrate para acceder a los beneficios</h3>
                <form className="m-2">
                    <BuyerForm type="name" text="Nombre" onChange={handleChange} />
                    <BuyerForm type="surname" text="Apellido" onChange={handleChange} />
                    <BuyerForm type="birthday" text="Fecha de nacimiento" onChange={handleChange} />
                    <BuyerForm type="email" text="Correo" onChange={handleChange}  />
                    <BuyerForm type="email2" text="Reingresa tu correo" onChange={handleChange} />
                    <BuyerForm type="phone" text="Telefono antepone el prefijo de tu país" onChange={handleChange} />
                </form>                
                <div className="m-4">
                    {(( dataUser.email ) === ( dataUser.email2 ))&& <Link to="/registered" className="button m-4 p-3 border-2 bg-violet-600 font-serif text-white hover:bg-indigo-300 hover:text-black hover:border-black" onClick={ await handlerRegister(dataUser) }>Completar registro</Link>}
                </div>
            </div>
    )
}