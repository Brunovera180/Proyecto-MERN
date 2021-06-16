import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas= () => {

  const tareasProyecto = [
      { nombre: 'Elegir Plataforma', estado: true },
      { nombre: 'Elegir Colores', estado: false },
      { nombre: 'Elegir Plataformas de pago', estado: false },
      { nombre: 'Elegir Hostig', estado: true }
  ]

  return(

    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>
          <ul className="listado-tareas">
              {tareasProyecto.lengh === 0
                  ? (<li className="tarea"><p>No hay tareas</p></li>)
                  : tareasProyecto.map(tarea =>(
                        <Tarea
                            tarea={tarea}
                        />
                  ))
              }
          </ul>

          <button
              type="button"
              className="btn btn-elimar"
          >Elimar Proyecto &times;</button>
    </Fragment>
);

}

export default ListadoTareas;
