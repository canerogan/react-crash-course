import './Counter.css'
import React, { useState } from 'react';

function Counter() {

    const [count, setCounter] = useState(0)
    function countMinus() {
        setCounter((prevCounter) => prevCounter - 1)
        setCounter((prevCounter) => prevCounter - 1)
    }
    function countPlus() {
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
    }


    return (
        <div className='counterbox'>
            <button className='counterbox__child'
            onClick={countMinus}
            >-</button>

            <p className='counterbox__child'>
                {count}
            </p>

            <button className='counterbox__child'
            onClick={countPlus}
            >+</button>
            
        </div>
        
    )
}


export default Counter
