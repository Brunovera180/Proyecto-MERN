import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    const initialState = {
        formulario : false
    }


    // Dispatch para ejecutar las aciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Seria de funciones para CRUD

    return(
        <proyectoContext.Provider
          value={{
              formulario: state.formulario
          }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
