import React, {Component} from 'react'; 
import { Outlet, Link } from "react-router-dom";

import './App.css';
import "./1/Lista";
import "./2/FormularzMet";

/*import "./WygladRaportu.js";*/


class App extends Component {
  render () {
    return(

      <div>
        <nav>
          <h1> Raporty meteorologiczne</h1> 

          <p>
            <Link to="/FormularzMet">
              <button className="button1">
               Nowy raport
               </button>
            </Link>
          </p>

          <p>
            <Link to="/Lista">
              <button className="button1">
              Archiwum raportów
              </button>
            </Link>
          </p>

          <p>
            <Link to="/">
              <button className="button2">
                 Strona główna
              </button>
            </Link>
          </p>

        </nav>
        <Outlet />
      </div>


    )
  }

}

export default App;