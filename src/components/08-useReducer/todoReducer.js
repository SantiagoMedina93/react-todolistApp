
export const todoReducer = ( state = [], {type, payload} ) => {
    
    switch (type) {
        case 'add':
            return [ ...state, payload ]

        case 'delete': 
            return state.filter( (state) => state.id !==  payload );
    
        case 'done-old': 
            return state.map( (state) => {
                if (state.id === payload) {
                    console.log(state);
                    return {
                        ...state,
                        done: !state.done
                    } 
                }else{
                    return state;
                }
            })

        case 'done': 

            return state.map( (state) => 
                ( state.id === payload )
                    ?{...state, done: !state.done}
                    : state
            )
            
        // Cuando se renderiza por primera vez, la fn todoReducer toma el caso default
        default:
            return state
        
    }

};