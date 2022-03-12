import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'

import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Test in <TodoAdd.test />', () => {

    const handleAddTodo = jest.fn();

    
    const wrapper = shallow(
        <TodoAdd 
        handleAddTodo={ handleAddTodo }
        /> 
    )
        
    test('Debe de mostrarse Correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();

    });

    test('No debe llamar handleAddTodo', () => {
    
        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes( 0 );

    }); 

    test(' Debe llamar la función handleAddTodo ', () => {
    
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target:{
                value,
                name: 'description'    
            }
        })
    
        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes( 1 );
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any( Object ) );
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any( Number ), 
            desc: value,
            done: false    
        });

        expect( wrapper.find('input').prop('value') ).toBe('');

    });

});