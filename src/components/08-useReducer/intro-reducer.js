const initialState = [{
    id:1,
    todo: 'Comprar pan',
    done: false
}];

const newTodo = [{
    id:2,
    todo: 'Comprar leche',
    done: false
}];

const agregarToDoAction = {
    type: 'agregar',
    payload: newTodo
}

const todoReducer = ( state = initialState, action ) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }

    return state;
}


let todos = todoReducer();
todos = todoReducer( todos,agregarToDoAction );

console.log( todos );