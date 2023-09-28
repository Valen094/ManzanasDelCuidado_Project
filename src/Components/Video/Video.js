import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

function Video() {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [documento, setDocumento] = useState(0)
    const mostrarDatos = ()=>{
        alert(nombre)
    }
    return (

        <div>
            <div className='form1'>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(event)=>{
                    setNombre(event.target.value)
                }}/>

                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(event)=>{
                    setNombre(event.target.value)
                }}/>

                <label htmlFor="">Documento</label>
                <input type="text" onChange={(event)=>{
                    setNombre(event.target.value)
                }}/>
                
            </div>
            <button onClick={mostrarDatos}>Registrar</button>
        </div>

    )



}

