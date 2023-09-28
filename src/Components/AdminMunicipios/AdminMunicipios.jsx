import React from 'react'
import { Header } from '../Header/Header'
import './AdminMunicipios.css'
// import { useState } from 'react'
// const url = "https://localhost:7057/api/Manzanas/"


// const [change, setChange] = useState (false)
// const [lista, setLista] = useState ([])

// fetch(url + "Listar").then((ob)=>{
//     return ob.json()}).then(()=>{
//         setLista(ob.response)
//     })

export const AdminMunicipios = () => {

    return (
        <>
            <header>
            <div className='tituloHeader'>
                    <img src="https://i.ibb.co/3fkg0nS/Logo.webp" alt="" width={100} height={100} />
                    <hr />
                    <div>
                        <h1>MANZANITAS</h1>
                        <p>Manzanas del cuidado</p>
                    </div>
                </div>
            </header>
            <div className='contmunicipios'// onClick={()=>{setChange(!change)}}

            >
                    <a className='regresaradmin' href="/iniciada">Regresar</a>
                <div className='botonesadmin'>

                    <h1 className='h1'>MUNICIPIOS</h1>

                    <button>+</button>
                    <input type="search " />
                    <input type="submit"  />
                    {/* <img src="/Img/lupa.png" alt="" width={20} height={20} /> */}

                </div>
                <div className='tabla'>

                    <table class="default">
                        <tr>
                            <td className='titulos'>CODIGO</td>
                            <td className='titulos'>MUNICIPIO</td>
                        </tr>
                        <tr>
                            <td>2222</td>
                            <td>Manizales</td>
                        </tr>
                        <tr>
                            <td>2234</td>
                            <td>Quindio</td>
                        </tr>
                        <tr>
                            <td>2342</td>
                            <td>Santander</td>
                        </tr>
                        <tr>
                            <td>24352</td>
                            <td>Armenia</td>
                        </tr>
                        <tr>
                            <td>76572</td>
                            <td>Medellin</td>
                        </tr>
                        <tr>
                            <td>2265</td>
                            <td>Pereira</td>
                        </tr>
                    </table>
                </div>
                <div className='botoneseditar'>
                    <button> EDITAR </button>
                    <button> REGISTRAR MANZANA </button>
                </div>
            </div>
        </>
    )
}
