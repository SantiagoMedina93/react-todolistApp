import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar - hijo  ');

    return (
        <button
            className="btn btn-primary ms-2"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
