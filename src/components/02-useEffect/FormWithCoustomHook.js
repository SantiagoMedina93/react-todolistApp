import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCoustomHook = () => {
    
    // NO SE PUEDE USAR UN HOOK DENTRO DE UN CONDICIONAL
    // LOS HOOKS SE ORDENAN EN FUNCION DE SU POSICIÓN EN EL CODIGO
    // Intenar colocarlos lo mas arriba del codigo (dentro del componente)
    // DESESTRUCTURACIÓN DE UN ARRAY
    const [formState, handelInputChance, handleSubmit] = useForm();

    const { name, password, email } = formState;

    useEffect(() => {
        console.log('El email cambío');

    }, [email]);

    

    return (
        <form onSubmit={ handleSubmit }>
        
            <h1>FormWithCoustomHook</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handelInputChance }

                    />
            </div>

            <div className='form-group my-2'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*******'
                    value={ password }
                    onChange={ handelInputChance }
                />  
             </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handelInputChance }
                />
            </div>

            <button type='submit' className='btn btn-primary mt-2'>
                Guardar
            </button>

            </form>
    )
};