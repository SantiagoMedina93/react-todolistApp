import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css'

// Para pocos cambios de estados: useState
// Para muchos cambios de estado: useReducer


const init = () => {
    // localStorage.getItem(key) = null <==> key no existe
    // JSON.parse(null) = null
    return JSON.parse(localStorage.getItem('todos')) || [];


    /* return[{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }] */
}

/*  const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender Mongo',
    done: false
}] */


export const TodoAPP = () => {

    // State: Estado del hook
    // todoReducer = ( state = [], action ) => {}: Fn que switchea como cambia el estado
    // distach ( action ): Envia el argumento a todoReducer. Si cambia el state: Redibuja el componente

    const [ todos, dispatch ] = useReducer(todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
 

    const handleDelete = (todoId) =>{

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleComplete = (id) => {

        dispatch( {
            type: 'done',
            payload: id
        } );
        
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    return (
        <>
            <h1>TodoApp: <small>( {todos.length} )</small> </h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} handleComplete={ handleComplete } handleDelete={ handleDelete }/>
                </div>

                <div className='col-5'>
                    <h3 className='text-center'>Agregar ToDo</h3>
                    <hr />

                    <TodoAdd handleAddTodo={ handleAddTodo } /> 
                </div>
            </div>
            
        </>
    )
};