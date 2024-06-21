import { useState } from "react"

function App() {
	const [color, setColor] = useState("black");

	return (
		<div className="flex justify-center w-full h-screen" style={{backgroundColor : color}}>

			<div className="flex fixed justify-center items-center bottom-12 gap-5 border-none rounded-3xl bg-slate-400 p-3">
				
				<button className="text-white border-none rounded-2xl bg-red-700 p-2" onClick={() => setColor("red")}>Red</button>
				
				<button className="text-white border-none rounded-2xl bg-green-700 p-2" onClick={() => setColor("green")}>Green</button>
				
				<button className="text-white border-none rounded-2xl bg-blue-700 p-2" onClick={() => setColor("blue")}>Blue</button>
				
				<button className="text-black border-none rounded-2xl bg-olive-700 p-2" onClick={() => setColor("olive")}>Olive</button>
				
				<button className="text-black border-none rounded-2xl bg-yellow-500 p-2" onClick={() => setColor("yellow")}>Yellow</button>
				
				<button className="text-black border-none rounded-2xl bg-purple-700 p-2" onClick={() => setColor("purple")}>Purple</button>

				<button className="text-black border-none rounded-2xl bg-white p-2" onClick={() => setColor("white")}>White</button>
				
				<button className="text-white border-none rounded-2xl bg-black p-2" onClick={() => setColor("black")}>Black</button>
			</div>

		</div>
	)
}

export default App
