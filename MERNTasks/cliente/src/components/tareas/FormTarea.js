import React from 'react';

const FormTarea= () => {
  return(
      <div clas="formulario">
          <form>
              <div clas="contenedor-input">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Tarea..."
                    name="nombre"
                />
              </div>

              <div clas="contenedor-input">
                <input
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value="Agregar Tarea"
                />
              </div>

          </form>
      </div>
  );

}

export default FormTarea;
