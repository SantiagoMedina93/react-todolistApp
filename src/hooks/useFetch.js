import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {
    
    // Ala renderizarce por primera vez ( Al montarlo ) 
    // isMounted.current = true
    const isMounted = useRef(true);

    const [state,setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    // useEffect se ejecuta cuando: 
    //      1. Al montar el componente 
    //      2. Al cambiar el/un estado 
    //      3. Despues de actualizar el DOM (HTML)
    useEffect(() => {
        
        // EL return del useEffect SOLO SE EJECUTA cuando el componente se desmonta
        return () =>{
            isMounted.current = false;  
        }

    // Con dependecias vacias solo se ejecuta 1 vez, cuando es montado
    }, []);


    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        })
        
        fetch(url)
            .then( resp => resp.json())
            .then( data => {

                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    })

                }else{
                    console.log(`El setState no se llama`);
                }   

            })
            .catch( () => {
                setState({
                    data:null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url]);

    return state;
    
};