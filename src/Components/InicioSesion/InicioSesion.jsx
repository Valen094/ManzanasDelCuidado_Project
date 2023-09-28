import React from 'react'
import './InicioSesion.css'

export const InicioSesion = () => {
    return (
        <>

            <section className='sectioninicio'>


                <div className='tituloHeaderinicio'>
                    <img src="https://i.ibb.co/3fkg0nS/Logo.webp" alt="" width={100} height={100} />
                    <hr />
                    <div>
                        <h1>MANZANITAS</h1>
                        <p>Manzanas del cuidado</p>
                    </div>
                </div>

                
                <div className='form'>
                <a className='equis' href="/">Regresar</a>

                <h1>INICIAR SESION</h1>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" />

                <div className='contraseña'>
                    <a className='forget' href="">¿Olvidaste tu contraseña?</a>
                    <p>¿No estas registrado aún? Registrate <a className='aqui' href="">AQUÍ</a></p>
                    
                </div>

                <a className='iniciarSesion' href="/iniciada">INICIAR SESION</a>
                </div>




            </section>
        </>
    )
}
