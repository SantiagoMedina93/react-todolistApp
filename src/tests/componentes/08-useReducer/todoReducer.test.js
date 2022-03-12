import {todoReducer} from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixture/demoTodos";


describe('Test in <todoReducer />', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = todoReducer( demoTodos, {} );
        expect( state ).toEqual(demoTodos)

    });

    test('Debe de retornar el estado por defecto', () => {

        const newTodo = {
            id:3,
            desc:'Aprender Express',
            done: false 
        }

        const state = todoReducer( demoTodos, {
            type: 'add',
            payload: newTodo
        });

        expect( state.length ).toBe(3);
        expect( state ).toEqual( [ ...demoTodos, newTodo ] );

    });

    test('Debe de borrar un TODO', () => {
        
        const state = todoReducer( demoTodos, {
            type: 'delete',
            payload: 2
        });

        expect( state.length ).toBe(1);
        expect( state ).toEqual([ demoTodos[0] ]);
    
    });        

    test('Debe de hacer el TOGGLE/DONE del TODO', () => {
        
        const state = todoReducer( demoTodos, {
            type: 'done',
            payload: 2
        });

        expect( state[1].done ).toBe(true);
        expect( state[0] ).toEqual( demoTodos[0] );
        
    });



    

});