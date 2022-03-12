import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css'

export const CounterWitchCustomHook = () => {

    const factor = 5;
    const {state, increment, reset, decrement} = useCounter(10);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />

            {/* Por defecto onClick={increment} envia como argumento el evento onClick */}
            <button onClick={ () =>  increment(factor)} className='btn btn-primary'>+{factor}</button>
            <button onClick={reset} className='btn btn-primary mx-2'>RESET</button>
            <button onClick={ () =>  decrement(factor)} className='btn btn-primary'>-{factor}</button>
        </>
    )
};