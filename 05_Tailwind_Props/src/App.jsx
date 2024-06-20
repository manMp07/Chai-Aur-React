import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
	const myObj = {
		userID : "Man",
		age : 20
	}
	let newArr = [1,2,4,5,7];

	return (
		<>
			<h1 className='bg-green-500 text-[#432511] p-4 rounded-xl mb-10'>Tailwind Test</h1>

			<Card/>
			<Card userName = "Chai Aur React" anyObject = {myObj} arr = {newArr}/>
		</>
	)
}

export default App
