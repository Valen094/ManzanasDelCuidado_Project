import React from 'react'
import './SesionIniciada.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const SesionIniciada = () => {
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
                    <a href="/">Cerrar sesión</a>
                    <a href="/municipios">Ajustes</a>
                    <a href="/perfil"><img src="https://i.ibb.co/s5v132b/Perfil2.png" alt="" width={20} height={20}/></a>
                </div>
            </header>

<section className='section1'>
  <div>
    <img src="https://i.ibb.co/Gnrrfh0/HOJAS2.png" alt="" />
  </div>

  <div className='titulosHome'>
    <h1>LAS MUJERES QUE NO REQUIEREN DE LA APROBACIÓN DE NADIE </h1>
    <p>Se vuelven la persona más temida del planeta</p>
    <div className='imagenesSection1'>
      <img src="https://i.ibb.co/rb72w2R/Mujer-Emprendiendo.jpg" alt="" width={360} height={200} />
      <img src="https://i.ibb.co/30R6nxn/Mujeres-Trabajando.jpg" alt="" width={360} height={200} />
    </div>
  </div>
</section>

<section className='section2'>
  <hr />
  <div className='titulosSection2'>
    <h2>SE PARTE DE NOSOTROS</h2>
    <p>Adquiere conocimiento y experiencia</p>
  </div>

  <div className='filtrossection2'>
    <div>
      <a href="">VER CATEGORIAS ▼</a></div>
      <a href="">FILTRAR MUNICIPIO ▼</a>
  </div>

  <div className='sectioncartas'>

    <div className='carta'>
      <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
      <p>Aprende</p>
      <h2>DISEÑO GRAFICO EN 1 MES</h2>
      <p>Armenia - Cr 20 # 45 - 34</p>
      <a href="/cardmapa">Ver más</a>
    </div>

    <div className='carta'>
      <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
      <p>Emprende</p>
      <h2>DISEÑO GRAFICO EN 1 MES</h2>
      <p>Armenia - Cr 20 # 45 - 34</p>
      <a href="/cardmapa">Ver más</a>
    </div>

    <div className='carta'>
      <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
      <p>Emplearse</p>
      <h2>DISEÑO GRAFICO EN 1 MES</h2>
      <p>Armenia - Cr 20 # 45 - 34</p>
      <a href="/cardmapa">Ver más</a>
    </div>

  </div>

  <div className='sectioncartas'>
    <div className='carta'>
      <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
      <p>Asesorias</p>
      <h2>DISEÑO GRAFICO EN 1 MES</h2>
      <p>Armenia - Cr 20 # 45 - 34</p>
      <a href="/cardmapa">Ver más</a>
    </div>

    <div className='carta'>
      <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
      <p>Descansar</p>
      <h2>DISEÑO GRAFICO EN 1 MES</h2>
      <p>Armenia - Cr 20 # 45 - 34</p>
      <a href="/cardmapa">Ver más</a>
    </div>

    <div className='carta'>
      <img src="https://i.ibb.co/yXh6c10/DISE-O.jpg" alt="" />
      <p>Aprende</p>
      <h2>DISEÑO GRAFICO EN 1 MES</h2>
      <p>Armenia - Cr 20 # 45 - 34</p>
      <a href="/cardmapa">Ver más</a>
    </div>
  </div>
</section>

<section className='section3'>

  <div>
    <img src="https://i.ibb.co/5kT1vSC/MANZANA.png" alt="" width={250} height={250} />
  </div>
  <div>
    <h2>ENCUENTRA ESPACIOS AGRADABLES</h2>
    <p>Compartelo con tu familia</p>
  </div>

</section>

<section className='section4'>
  <div className='botones'>
    <a href="">PARQUES</a>
    <a href="">JARDINES</a>
    <a href="">COLEGIOS</a>
    <a href="">HOSPITALES</a>
    <a href="">ATENCIÓN A MAYORES DE EDAD</a>
  </div>
</section>

<section className='section5'>
  <div className='sectionlugares'>
    <div className='lugares'>
      <h2>PARQUE TERESITA</h2>
      <p className='lugar'>Armenia - Cr 23 # 23 - 12</p>
      <a href="/mapa">Como llegar</a>
    </div>

    <div className='lugares'>
      <h2>COLEGIO SAN MARTIN</h2>
      <p className='lugar'>Manizales - Calle 45 # 23 - 12</p>
      <a href="/mapa">Como llegar</a>
    </div>

    <div className='lugares'>
      <h2>JARDIN ANTIOQUIA</h2>
      <p className='lugar'>Armenia - Calle 50</p>
      <a href="/mapa">Como llegar</a>
    </div>
  </div>
  <div className='sectionlugares'>
    <div className='lugares'>
      <h2>HOSPITAL SUR</h2>
      <p className='lugar'>Bogotá calle 43</p>
      <a href="/mapa">Como llegar</a>
    </div>

    <div className='lugares'>
      <h2>REFUGIOS ABUELITOS</h2>
      <p className='lugar'>Cucuta calle 34</p>
      <a href="/mapa">Como llegar</a>
    </div>

    <div className='lugares'>
      <h2>ANCIANATO - TU CORAZÓN</h2>
      <p className='lugar'>Santander Cr 23 # 12 - 23</p>
      <a href="/mapa">Como llegar</a>
    </div>
  </div>
</section>


<Footer />
        </>
    )
}
