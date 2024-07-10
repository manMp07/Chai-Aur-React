import { useState } from "react";

function App() {
	// let [variableName, methodName] = useState(Default_Value) ---> 2 length ka array return krta hai 

	const [counter, setCounter] = useState(15);

	//let counter = 15;

	const addValue = () => {
		//console.log("Clicked, Value :", counter);
		//counter = counter + 1;

		/* setCounter(counter + 1);
		setCounter(counter + 1);
		setCounter(counter + 1);
		setCounter(counter + 1); 
		Same hai isliye compiler(fiber) ek hi baar evaluate karega*/
		
		/*Callback denge to one by one evaluate krega*/
		setCounter(anyName => anyName + 1);
		setCounter(prevCounter => prevCounter + 1);
		setCounter(prevCounter => prevCounter + 1);
		setCounter(prevCounter => prevCounter + 1);
	}

	const removeValue = () => {
		setCounter(counter - 1);
	}

	return (
		<>
			<h1>Chai Aur React</h1>
			<h2>Counter Value : {counter}</h2>

			<button onClick = {addValue}> Add Value {counter} </button>
			<br /><br />
			<button onClick = {removeValue}> Remove Value {counter} </button>

			<br /><br /><br />
			<footer> <h2>Footer : {counter}</h2> </footer>
		</>
	)
}

export default App