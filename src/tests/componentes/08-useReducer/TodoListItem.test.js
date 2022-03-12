import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'
import { demoTodos } from '../../fixture/demoTodos';

import {TodoListItem} from '../../../components/08-useReducer/TodoListItem'


describe('Test in <TodoListItem.test />', () => {

    // ????????????????????????????????
    const handleComplete = jest.fn();  
    const handleDelete = jest.fn(); 

    const wrapper = shallow( 
        <TodoListItem 
            todos={ demoTodos[0] }
            index={ 0 }
            handleComplete={ handleComplete }
            handleDelete={ handleDelete }

        />
    );

    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de llamar la función handleDelete', () => {
    
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    
    });

    test('Debe de llamar la función handleToggle', () => {
    
        wrapper.find('p').simulate('click');
        expect( handleComplete ).toHaveBeenCalledWith( demoTodos[0].id );
    
    });

    test('Debe de mostrar el texto correctamente', () => {
    
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( `1. ${ demoTodos[0].desc }` );
    
    });

    test('Debe de tener la clase complete', () => {
    
        const todo = demoTodos[0];
        todo.done = true; 

        const wrapper = shallow( 
            <TodoListItem 
                todos={ todo }
            />
        );

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);

    
    });
    
});