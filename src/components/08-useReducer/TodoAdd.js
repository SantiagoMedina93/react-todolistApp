import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    
    

    const [{ description }, handelInputChance, reset] = useForm({
        description:''
    }); 
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo );
        reset();
    }


    
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                name='description'
                className='form-control'
                placeholder='Aprender.....'
                autoComplete='off'
                value={ description }
                onChange={ handelInputChance }
            />

            <button
                type='submit'
                className='btn btn-primary col-12 mt-2'
            >
                Agregar
            </button>

        </form>
    )
};