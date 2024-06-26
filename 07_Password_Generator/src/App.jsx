import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    //useRef hook
    let passwordRef = useRef(null);

    // useCallback is for optimization using memoization concept
    const passwordGenerator = useCallback(() => {
        let newPass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if(numAllowed)
            str += "0123456789";
        if(charAllowed)
            str += "!@#$%^&*()_.?";

        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * str.length);
            newPass += str[index];
        }
        setPassword(newPass);

    }, [length, numAllowed, charAllowed, setPassword]);

    const copyToClipBoard = useCallback(() => {
        //console.log(passwordRef.current);

        passwordRef.current.select();
        //passwordRef.current.setSelectionRange(0,5);
        window.navigator.clipboard.writeText(password);
    }, [password]);

    // run function when page load & when any of the dependencies get change
    useEffect(() => {
        passwordGenerator();
    }, [length, charAllowed, numAllowed, passwordGenerator]);

    return (
        <div className='w-full max-w-lg mx-auto rounded-md p-4 pr-10 my-8 text-orange-500 bg-gray-700'>
            <h1 className='text-3xl text-white mx-auto text-center'>Password Generator</h1>

            <div className='w-full overflow-hidden mx-3 flex rouded-lg my-4 gap-3 justify-center'>
                <input 
                    id='password'
                    type="text"
                    placeholder='password'
                    value={password}
                    className='outline-none w-[70%] rounded-md py-1 px-3'
                    readOnly
                    ref={passwordRef}
                />

                <button
                    onClick={copyToClipBoard} 
                    className='text-white bg-blue-700 rounded-md px-3 hover:bg-blue-600 active:scale-95'
                > Copy </button>
            </div>

            <div className='flex gap-5 font-medium'>
                <div className='flex item-center gap-2'>
                    <input
                        type="range"
                        min={6}
                        max={20}
                        value={length}
                        className='cursor-pointer'
                        onChange={ (e) => setLength(e.target.value) }
                    />
                    <label>Length : {length}</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        value={numAllowed}
                        defaultChecked = {numAllowed}
                        onChange={() => {
                            setNumAllowed(prev => !prev);
                        }}
                    />
                    <label className='ml-1'>Numbers</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        value={charAllowed}
                        defaultChecked = {charAllowed}
                        onChange={() => {
                            setCharAllowed(prev => !prev);
                        }}
                    />
                    <label className='ml-1'>Characters</label>
                </div>
            </div>
        </div>
    )
}

export default App
