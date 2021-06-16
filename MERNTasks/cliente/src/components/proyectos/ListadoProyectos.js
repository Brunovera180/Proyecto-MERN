import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos= () => {

  const proyecto = [
    {nombre: 'Tienda Virtual'},
    {nombre: 'Intranet'},
    {nombre: 'Diseño de Sitio Web'}
  ]

  return(

      <ul className="listado-proyectos">
          {proyecto.map(proyecto => (
              <Proyecto
                  proyecto={proyecto}
              />
          ))}
      </ul>
  );

}

export default ListadoProyectos;
