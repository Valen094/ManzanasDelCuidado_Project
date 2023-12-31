import React from 'react'
import { Header } from '../Header/Header'
import './Mapa.css'
import { Footer } from '../Footer/Footer'

export const Mapa = () => {
    return (
        <>
            <Header />
            <div className='contenedormapa'>
                <div className='regresarmapa'>
                    <a href="/">REGRESAR</a>
                </div>
                <a href="/cardmapa"><img src="https://i.ibb.co/3fkg0nS/Logo.webp" alt="" width={40} height={40} className='manzana1' /></a>
                <a href="/cardmapa"><img src="https://i.ibb.co/3fkg0nS/Logo.webp" alt="" width={40} height={40} className='manzana2' /></a>
                <a href="/cardmapa"><img src="https://i.ibb.co/3fkg0nS/Logo.webp" alt="" width={40} height={40} className='manzana3' /></a>
                <a href="/cardmapa"><img src="https://i.ibb.co/3fkg0nS/Logo.webp" alt="" width={40} height={40} className='manzana4' /></a>

                <div className='contenedorinfo'>
                    <h1>ENCUENTRA TUS MANZANAS</h1>
                    <p>Tus servicios favoritos estan ubicados en cada manzana, navega para saber más sobre ellos</p>
                    <h2>Haciendo click en la manzana, veras la información de cada sitio</h2>
                    <p className='p2'>!Encuentra los sitios mas cercanos!</p>

                    <div>
                        <img src="https://i.ibb.co/M9gbdPc/map.png" alt="" />
                    </div>

                </div>
            </div>



            <Footer />
        </>
    )
}
