import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixture/demoTodos";


describe('Test in <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleComplete = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={ demoTodos }
            handleDelete = { handleDelete}
            handleComplete = { handleComplete}
        />
    )
    
    test('Debe de mostrarse Correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener X elementos TodoListItem', () => {
    
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length )// .at(0) = en la posición 0

        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );


    });




});