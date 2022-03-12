import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // EL hook(useContext) buscara la informacion (variables, estados, fn)(izq) 
    // en el arbol de componentes uno que coincida con el definido como arg (der)
    const {setUser} = useContext(UserContext)
    
    const newUser = {
        id: 1234,
        name: 'Santiago'
    }

    
    return (
        <>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ () => setUser(newUser) }
            >
                Login
            </button>
        </>
    )
};