import React from 'react';

import { useRef, useState } from 'react';

import './FormularzMet.css';

const isEmpty = value => value.trim() === '';

const Formularz = (props) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		number: true,
		temp: true,
		unit: true,
		date: true,
		city: true
	}); 

	const numberInputRef = useRef();
	const tempInputRef = useRef();
	const unitInputRef = useRef();
	const dateInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredNumber = numberInputRef.current.value;
		const enteredTemp = tempInputRef.current.value;
		const enteredUnit = unitInputRef.current.value;
		const enteredDate = dateInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNumberIsValid = !isEmpty(enteredNumber);
		const enteredTempIsValid = !isEmpty(enteredTemp);
		const enteredUnitIsValid = !isEmpty(enteredUnit);
		const enteredDateIsValid = !isEmpty(enteredDate);
		const enteredCityIsValid = !isEmpty(enteredCity);

		console.log(enteredNumber);
		console.log(enteredTemp);
		console.log(enteredUnit);
		console.log(enteredDate);
		console.log(enteredCity);

		setFormInputsValidity({
			number: enteredNumberIsValid,
			temp: enteredTempIsValid,
			unit: enteredUnitIsValid,
			date: enteredDateIsValid,
			city: enteredCityIsValid
		});

		const formIsValid = 
			enteredNumberIsValid &&
			enteredTempIsValid &&
			enteredUnitIsValid &&
			enteredDateIsValid &&
			enteredCityIsValid;
		if (formIsValid) {
			//submit
		}
	};
	
	return (
		<form onSubmit={confirmHandler}> 
			<div className="divForm">
				<label htmlFor='number'>Nr raportu:</label> 
				<input className= "inputNumber" 
						type='string' 
						id='number' 
						ref={numberInputRef} 
						placeholder="123..."/>
					{!formInputsValidity.number && 
					<p className="pWrong">Wypełnij puste pole</p>}
				<br/>
				<label htmlFor='temp'>Temperatura:</label> 
				<input className= "inputTemp" 
						type='number' 
						id='temp' 
						ref={tempInputRef} 
						placeholder="0"/> 
					{!formInputsValidity.temp && 
					<p className="pWrong">Wypełnij puste pole</p>}
				<br/>
				<label htmlFor='unit'>Jednostka:</label> 
				<input className= "inputUnit" 
						type='TemperatureUnit' 
						id='unit' 
						ref={unitInputRef} 
						placeholder="K"/> 
					{!formInputsValidity.unit && 
					<p className="pWrong">Wypełnij puste pole</p>}
				<br/>
				<label htmlFor='date'>Data:</label> 
				<input className= "inputDate" 
						type='date' 
						id='date' 	
						ref={dateInputRef} /> 
					{!formInputsValidity.date && 
					<p className="pWrong">Wypełnij puste pole</p>}
				<br/>
				<label htmlFor='city'>Miasto:</label> 
				<input className= "inputCity" 
						type='string' 
						id='city' 
						ref={cityInputRef}
						placeholder="Gdańsk" /> 
					{!formInputsValidity.city && 
					<p className="pWrong">Wypełnij puste pole</p>}
			</div>
			<div>
				<button className="button2">Zapisz</button>
			</div>
		</form>
	);
};

export default Formularz;