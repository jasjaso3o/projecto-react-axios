import './App.css';
import Libros from './componentes/libros/Main';
import Autores from './componentes/autores/Main';
import {Router, Switch, Route, Redirect} from 'wouter';
import Header from './componentes/comun/header.jsx';

// https://api-libros.ctpoba.edu.ar/

export default function App(){

  return(
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path="/autores">
            <Autores />
          </Route>
          <Route path="/libros">
            <Libros />
          </Route>
          <Route>
            <Redirect to="/autores" />
          </Route>
        </Switch>
      </Router>
      {/* <Autores />
      <Libros /> */}
    </div>
  )
}

