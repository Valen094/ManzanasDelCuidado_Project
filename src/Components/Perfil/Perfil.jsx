import React from 'react'
import { Header } from '../Header/Header'
import './Perfil.css'
import { Footer } from '../Footer/Footer'

export const Perfil = () => {
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
                    <a href="/perfil"><img src="https://i.ibb.co/s5v132b/Perfil2.png" alt="" width={20} height={20}/></a>
                </div>
            </header>

            <a className='regresar' href="/iniciada">REGRESAR</a>

            <div className='contenedorperfil'>
                <div className='cont2perfil'>
                    <div className='perfil'>
                        <img src="https://i.ibb.co/s5v132b/Perfil2.png" alt="" width={300} height={300} />
                    </div>
                    <div className='perfil2'>
                        <h1>JULIANA CARDENAS LOPEZ</h1>
                        <p className='ocupacion'><h2>Ocupacion:</h2>Asistente</p>
                        <p className='ocupacion'><h2>Contacto:</h2>juli28374@gmail.com</p>

                        <h2 className='titulo'>Armenia</h2>
                    </div>
                </div>


                <div className='hr2'>
                    <hr />
                </div>
                <div className='cardperfil'>
                    <h3>MANZANAS TERMINADAS</h3>
                    <div className='sectioncartas'>

                        <div className='carta'>
                            <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
                            <p>Aprende</p>
                            <h2>DISEÑO GRAFICO EN 1 MES</h2>
                            <p>Armenia - Cr 20 # 45 - 34</p>
                            <a href="">Descargar PDF</a>
                        </div>

                        <div className='carta'>
                            <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
                            <p>Emprende</p>
                            <h2>DISEÑO GRAFICO EN 1 MES</h2>
                            <p>Armenia - Cr 20 # 45 - 34</p>
                            <a href="">Descargar PDF</a>
                        </div>

                        <div className='carta'>
                            <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
                            <p>Emplearse</p>
                            <h2>DISEÑO GRAFICO EN 1 MES</h2>
                            <p>Armenia - Cr 20 # 45 - 34</p>
                            <a href="">Descargar PDF</a>
                        </div>

                    </div>
                </div>

                <div className='cardperfil'>
                    <h3>MANZANAS EN CURSO</h3>
                    <div className='sectioncartas'>

                        <div className='carta'>
                            <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
                            <p>Aprende</p>
                            <h2>DISEÑO GRAFICO EN 1 MES</h2>
                            <p>Armenia - Cr 20 # 45 - 34</p>
                            <a href="">Descargar PDF</a>
                        </div>

                        <div className='carta'>
                            <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
                            <p>Emprende</p>
                            <h2>DISEÑO GRAFICO EN 1 MES</h2>
                            <p>Armenia - Cr 20 # 45 - 34</p>
                            <a href="">Descargar PDF</a>
                        </div>

                        <div className='carta'>
                            <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
                            <p>Emplearse</p>
                            <h2>DISEÑO GRAFICO EN 1 MES</h2>
                            <p>Armenia - Cr 20 # 45 - 34</p>
                            <a href="">Descargar PDF</a>
                        </div>

                    </div>
                        <Footer />

                </div>
            </div>
        </>
    )
}
