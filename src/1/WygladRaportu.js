

function WygladRaportu(rep) {
  return(
  		<div className="divRep">
    		  <div className="divR1">
      		Nr raportu:
          </div>
            <div className="divR11">
            {rep.id}
            </div>
          <div className="divR2">
      		Temperatura:
          </div>
            <div className="divR12">
            {rep.temperature} {rep.unit}
            </div>
          <div className="divR3">
      		Data:
          </div>
            <div className="divR13">
            {rep.date}
            </div>
          <div className="divR4">
          Miasto:
          </div>
            <div className="divR14">
            {rep.city}
            </div>
      </div>
  		);
  	}
export default WygladRaportu;