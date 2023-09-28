import React from 'react'
import { Header } from '../Header/Header'
import './MapaCard.css'

export const MapaCard = () => {
    return (
        <>
            <header>
                <div className='tituloHeader'>
                    <img src="public/Img/Logo.webp" alt="" width={100} height={100} />
                    <hr />
                    <div>
                        <h1>MANZANITAS</h1>
                        <p>Manzanas del cuidado</p>
                    </div>
                </div>
            </header>
            <div className='cont'>
            <div className='contCard'>
                <div className='contcard2'>

                    <h1>DISEÑO GRAFICO - 1 MES</h1>
                    <h2>Emprende</h2>
                    <h2>DISTRIBUIR COSMETICOS</h2>
                    <p>Caldas - Calle 20 # 10 - 23</p>

                    <p className='lorem'>El curso fomenta la creatividad y la capacidad de pensamiento crítico de los estudiantes. Se anima a los estudiantes a explorar su imaginación y a encontrar soluciones innovadoras a los problemas de diseño.</p>

                    <a className='volver' href="/mapa">VOLVER</a>
                    <a className='iniciar' href="">INICIAR AHORA</a>
                </div>
            </div>
            </div>
        </>
    )
}
