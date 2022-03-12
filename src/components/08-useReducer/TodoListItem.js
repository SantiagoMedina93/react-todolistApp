import React from 'react';

export const TodoListItem = ({ todos, handleDelete, handleComplete,index}) => {
    
    return (
        <li
            key={ todos.id }
            className='list-group-item'
        >
            <p 
                className={ `${todos.done && 'complete'}` }
                onClick={ () => handleComplete( todos.id ) }
            >
                { index + 1 }. {todos.desc}
            </p>
            
            <button
                    onClick={ () => handleDelete( todos.id ) }
                    /* onClick={ handleDelete }
                    value={ id } */
                    className='btn btn-danger'
            >
                Borrar
            </button>
        </li>
    )
};