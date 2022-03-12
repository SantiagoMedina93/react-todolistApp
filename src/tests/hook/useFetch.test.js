import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch';

describe('Test in <useFetch.test />', () => {

    test('Debe de retornar la informació por defecto', () => {

        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/${counter}') );
        
        // La prueba (este codigo) es sincrono, por eso se ejecutara antes de recibr el url
        // en el hook useFetch() que es asincrono.
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('Debe de tener la información deseada: loading:false, error:false', async() => {
    
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
        await waitForNextUpdate({timeout:2500}); 

        const { data, loading, error } = result.current;
        
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);

    });

    test('Debe de manejar el error', async() => {
    
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2') );
        await waitForNextUpdate({timeout:2500}); 

        const { data, loading, error } = result.current;
        
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
        
    
    });



    
});