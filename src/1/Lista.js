import React from 'react'; 

import './ListaMet.css';



import WygladRaportu from "./WygladRaportu.js";
import {db} from './BaseR.js';



function Lista() {
  return(
      <div>
        {db.map((rep) => {
          const list=(
            <div>          
              <WygladRaportu
                key={rep.id}
                id={rep.id}
                temperature={rep.temperature}
                unit={rep.unit}
                date={rep.date}
                city={rep.city}
              />
            </div>
            );
          return list;
        })}
      </div>
        );
}

export default Lista;