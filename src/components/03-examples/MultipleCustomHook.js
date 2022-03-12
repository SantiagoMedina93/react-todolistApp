import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'

export const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1)

    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    // !!data = existe? 
    const { author, quote } = !!data && data[0];
    
    return (
        <div>
            {/* {console.log('Inicio del DOM')} */}
            <h1>Breackin Bad Quotes</h1>  
            <hr />


        {
            loading
            ?
            (
                <div className='alert alert-info text-center'>
                Loading...
                </div>
            )
            :
            (
                <div className='blockquote text-end'> 
                    <p className='mb-0'> {quote} </p>
                    <footer className='blockquote-footer mt-0'> {author} </footer>
                </div>
            )
        }   

        <button 
            className='btn btn-primary'
            onClick={ increment }>
            Siguiente Quote
        </button>

        </div>
    )
};