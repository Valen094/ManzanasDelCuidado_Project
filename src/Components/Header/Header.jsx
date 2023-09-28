import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header>
                <div className='tituloHeader'>
                    <img src="https://i.ibb.co/YWMRp8m/Logo.webp" alt="" width={100} height={100} />
                    <hr />
                    <div>
                        <h1>MANZANITAS</h1>
                        <p>Manzanas del cuidado</p>
                    </div>
                </div>
                <div className='botonesheader'>
                    <ul className='botonesheaderLista'>
                        <a href=""><NavLink to={"/iniciarsesion"}>Iniciar sesión</NavLink></a>
                        <a href=""><NavLink to={"/registro"}>Registrarse</NavLink></a>
                    </ul>
                </div>
            </header>
        </>
    )
}
