import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleDelete, handleComplete}) => {

    
    return (
        <ul className='list-group list-group-flush'>     
            {
                todos.map( (todos,index) => (
                    
                    /* TodoListItem, todo, i, handleDelete, handelDone  */
                    <TodoListItem
                        key={ todos.id } 
                        todos={todos} 
                        index={index} 
                        handleComplete={ handleComplete } 
                        handleDelete={ handleDelete }
                    />
                ))
            }

        </ul>
    )
};