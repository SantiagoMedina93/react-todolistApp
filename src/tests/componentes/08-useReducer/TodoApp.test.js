import React from "react";
import { mount, shallow } from "enzyme";
import { TodoAPP } from '../../../components/08-useReducer/TodoAPP';
import { demoTodos } from '../../fixture/demoTodos'


import { act } from '@testing-library/react-hooks'

describe('Test in <TodoApp.test />', () => {

    const wrapper = shallow( <TodoAPP /> );
    Storage.prototype.setItem = jest.fn()

    test('Debe de mostrarse correctamnete', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de agregar un TODO', () => {
    
        const wrapper = mount( <TodoAPP /> ); //Lo mismo que el shallow pero mas especifico
        
        act(() => {

            wrapper.find('TodoAdd').prop( 'handleAddTodo' )(demoTodos[0]);
            wrapper.find('TodoAdd').prop( 'handleAddTodo' )(demoTodos[1]);

        })

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp: ( 2 )');
        expect ( localStorage.setItem ).toBeCalledTimes(2);

    });

    test('Debe de eliminar un todo', () => {
    
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp: ( 0 )');

        
    });
});