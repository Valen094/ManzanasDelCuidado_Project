import React from 'react'
import './Registro.css'

export const Registro = () => {
    return (
        <>
            <div className='contregistro'>

                <div className='tituloHeaderinicio'>
                    <img src="public/Img/Logo.webp" alt="" width={100} height={100} />
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
                            <input type="text" />

                            <label htmlFor="">Nombres</label>
                            <input type="text" />

                            <label htmlFor="">Apellidos</label>
                            <input type="text" />

                            <label htmlFor="">Contraseña</label>
                            <input type="password" />
                        </div>
                        <div className='form1'>

                            <label htmlFor="">Correo</label>
                            <input type="text" />

                            <label htmlFor="">Dirección</label>
                            <input type="text" />

                            <label htmlFor="">Ocupación</label>
                            <input type="text" />

                            <label htmlFor="">Telefono</label>
                            <input type="text" />
                        </div>
                    </div>
                        <p className='cuenta'>¿Ya tienes una cuenta? Inicia sesión <a href="">AQUÍ</a></p>
                    <a className='registro' href="">Registrarse</a>
                </div>
            </div>

            
        </>
    )
}
