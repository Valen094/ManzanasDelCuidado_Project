import React from 'react'
import './Registro.css'

export const Registro = () => {
    return (
        <>
            <div className='contregistro'>

                <div className='tituloHeaderinicio'>
                    <img src="https://i.ibb.co/3fkg0nS/Logo.webp" alt="" width={100} height={100} />
                    <hr />
                    <div>
                        <h1>MANZANITAS</h1>
                        <p>Manzanas del cuidado</p>
                    </div>
                </div>

                <div className='cuadro'>
                    <a className='regresarr' href="/">Regresar</a>
                    <h2>REGISTRARSE</h2>
                    <div className='contform'>
                        <div className='form1'>
                            <label htmlFor="">Documento</label>
                            <input type="text" id='documento'/>

                            <label htmlFor="">Nombres</label>
                            <input type="text" id='nombre'/>

                            <label htmlFor="">Apellidos</label>
                            <input type="text" id='apellido'/>

                            <label htmlFor="">Contraseña</label>
                            <input type="password" id='contraseña'/>
                        </div>
                        <div className='form1'>

                            <label htmlFor="">Correo</label>
                            <input type="text" id='correo'/>

                            <label htmlFor="">Dirección</label>
                            <input type="text" id='direccion'/>

                            <label htmlFor="">Ocupación</label>
                            <input type="text" id='ocupacion'/>

                            <label htmlFor="">Telefono</label>
                            <input type="text" id='telefono'/>
                        </div>
                    </div>
                        <p className='cuenta'>¿Ya tienes una cuenta? Inicia sesión <a href="">AQUÍ</a></p>
                    <a className='registro' href="">Registrarse</a>
                </div>
            </div>

            
        </>
    )
}
