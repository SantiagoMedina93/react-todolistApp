import React from 'react';

// Solo cambia cuando la property({ increment })!!(fn)!! apunta a un espacio en memoria diferente 
// Cuando? Cuando la dependencia del useCallback cambia
export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volvi a generar - hijo ');

    return (
        
        <button
        className='btn btn-primary'
        // 5 = num
        onClick={ () => increment( 5 ) }
        >
            incrementar
        </button>
    )
});