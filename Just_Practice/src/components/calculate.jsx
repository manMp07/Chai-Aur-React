import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incremet, decrement, incremetByValue } from '../feature/counter';

export default function Calculate() {
    const [value, setValue] = useState(useSelector(state => state.count));

    const [add, setAdd] = useState(2);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setAdd(e.target.value);
    }

    return (
        <div className='flex gap-2'>
            <h1>{value}</h1>

            <button className='border border-black'
            onClick={() => dispatch(incremet())}>
                Increment
            </button>

            <button
            onClick={() => dispatch(decrement())}>
                Decrement
            </button>

            <div>
                <input type="text" value={add} onChange={() => handleChange} />
                
                <button
                onClick={() => dispatch(incremetByValue(add))}>
                    Increment
                </button>
            </div>
        </div>
    )
}