import React from 'react'
import React, { useState } from 'react';

function Municipios() {
  const [municipios, setMunicipios] = useState([
    'Municipio 1',
    'Municipio 2',
    'Municipio 3',
    // Agrega más municipios según sea necesario
  ]);

  return (
    <div>
      <h1>Lista de Municipios</h1>
      <ul>
        {municipios.map((municipio, index) => (
          <li key={index}>{municipio}</li>
        ))}
      </ul>
    </div>
  );
}

export default Municipios;


