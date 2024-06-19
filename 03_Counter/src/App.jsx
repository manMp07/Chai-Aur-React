import { useState } from "react";

function App() {
	// let [variableName, methodName] = useState(KuchBhii) ---> 2 length ka array return krta hai 

	let [counter, setCounter] = useState(15);

	//let counter = 15;

	const addValue = () => {
		console.log("Clicked, Value :", counter);
		//counter = counter + 1;

		if(counter < 20)
			setCounter(counter + 1);
	}

	const removeValue = () => {
		if(counter > 0)
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