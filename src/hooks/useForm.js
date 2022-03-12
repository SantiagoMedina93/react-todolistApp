import { useState } from "react";


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState( initialState );
    /*     name:'',
        password:'',
        email:''
    }); */

    const reset = () => {
        setValues( initialState )
    }
    
    const handelInputChance = ({target}) => {

        // console.log(event.target.name);
        // target.value = Valor ingresado por el usuario
        
        setValues({
            // Desdestructuro el formState = escribo todos los valores anteriores
            ...values,
            // input de nombre: target.name = name
            // input de email: target.name = email
            [ target.name ]: target.value
        })

       
    }

    
    return [values, handelInputChance, reset]; 
    
};

