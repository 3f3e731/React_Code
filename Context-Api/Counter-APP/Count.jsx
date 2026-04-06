import React, { useState } from 'react'
import { useContext } from 'react';
import { CountContext } from '../context/CountContext';
import { useRef } from 'react';

const Count = () => {
    const inputRef = useRef();
    const { state, IncreaseCount, DecreaseCount, ResetCount, IncreaseBy } = useContext(CountContext);
    return (
        <div>
            <h1>Counter App</h1>

            <h1>Count:{state.count}</h1>

            <button onClick={IncreaseCount}>Increase</button>
            <button onClick={DecreaseCount}>Decrease</button>
            <button onClick={ResetCount}>Reset</button>
            <br />
            <input type="number"
                placeholder='Enter...'
                ref={inputRef} />

            <button
                onClick={() => { IncreaseBy(Number(inputRef.current.value)); inputRef.current.value = '' }}>
                IncreaseBy
            </button>
            <br /><br />

            <h3>Save on local storage</h3>
            <button onClick={() => { localStorage.setItem("count", state.count) }}>Save</button>
        </div>
    )
}

export default Count
