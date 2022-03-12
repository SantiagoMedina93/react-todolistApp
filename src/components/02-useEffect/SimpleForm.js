import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {
    
    // NO SE PUEDE USAR UN HOOK DENTRO DE UN CONDICIONAL
    // LOS HOOKS SE ORDENAN EN FUNCION DE SU POSICIÓN EN EL CODIGO
    // Intenar colocarlos lo mas arriba del codigo (dentro del componente)

    const [formState,setFormState] = useState({
        name:'',
        email:''
    });
    const { name, email } = formState;

    useEffect( () => {
        //console.log('HEY');
    }, [] )

    useEffect( () => {
        //console.log('formState cambío');
    }, [formState] )

    useEffect( () => {
        //console.log('email cambío');
    }, [email] )
    

    const handelInputChance = ({ target }) => {

        // console.log(event.target.name);
        // target.value = Valor ingresado por el usuario
        
        setFormState({
            // Desdestructuro el formState = escribo todos los valores anteriores
            ...formState,
            // input de nombre: target.name = name
            // input de email: target.name = email
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>UseEffct</h1>
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
        </>
    )
};