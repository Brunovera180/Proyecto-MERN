import React from 'react';
import { BrowserRouter as Router, Swich, Route} from 'react-router-dom'
import Login from './component/auth/Login'
import NuevaCuenta from './component/auth/NuevaCuenta'
import Proyectos from './component/proyectos/Proyectos'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
    </Router>
  );
}

export default App;
