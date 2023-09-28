import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <footer>

                <div className='tituloHeader'>
                    <img src="public/Img/Logo.webp" alt="" width={100} height={100} />
                    <hr />
                    <div>
                        <h1>MANZANITAS</h1>
                        <p>Manzanas del cuidado</p>
                    </div>
                </div>
                <div>
                    <a className='redes' href=""><img src="/Img/insta.webp" alt="" width={50} height={50}/></a>
                    <a className='redes' href=""><img src="/Img/facebook.png" alt="" width={50} height={50}/></a>
                </div>

            </footer>
        </>
    )
}
