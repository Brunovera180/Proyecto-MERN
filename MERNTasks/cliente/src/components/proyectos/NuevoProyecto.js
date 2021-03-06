import React, { Fragment, useState, useContext }  from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto= () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario } = proyectosContext;



    // State para Proyecto
    const [proyecto, guardarProyecto] = useState({
      nombre: ''
    });

    // Extraer nombre del proyecto
    const { nombre } = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = e => {
      guardarProyecto({
          ...proyecto,
          [e.target.name] : e.target.value
      })
    }

    // Cuando el usuario envia el proyectos
    const onSubmitProyecto = e => {
      e.preventDefault();

      // Validar Proyecto

      // Agregar State

      // Reiniciar el form
    }

  return(
    <Fragment>

      <button
        type="button"
        className="btn btn-block btn-primario"
      >Nuevo Proyecto </button>

    {
      formulario ?
        (
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input
                      type="submit"
                      className="btn btn-primario btn-block"
                      value="Agregar Proyecto"
                />
            </form>
        ) : null
    }
    </Fragment>
  );

}

export default NuevoProyecto;
