import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'
import { MultipleCustomHook } from '../../../components/03-examples/MultipleCustomHook';

// Con el jest.mock() no use propiamente el useFetch(), sino una implementación
// No necesito testear el useFetch()
// Me interesa los valores que retorna el customHook no su comportamiento
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Test in <MultipleCustomHook.test />', () => {

    // !!! VERIFICAR XQ CON ESTE BEFOREEACH FUNCIONA!!!!
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })


    test('1. Debe de mostrarse correctamente', () => {

        // Si necesito usar el hook useFech y no la implementacion
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            erro:null
        })


        const wrapper = shallow( <MultipleCustomHook /> );
        expect( wrapper ).toMatchSnapshot();  

    });

    test('2. Debe de mostrar la información', () => {
        // Información por defecto
        useFetch.mockReturnValue({
            data:[{
                author:'Fernando',
                quote: 'Hola Mundo' 
            }],
            loading:false,
            erro:null
        })

        const wrapper = shallow( <MultipleCustomHook /> );
        // console.log( wrapper.html() );
        
        // Busqueda en wrapper
        expect( wrapper.find('.alert').exists() ).toBe(false); 
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola Mundo' ); 
        expect( wrapper.find('footer').text().trim() ).toBe( 'Fernando' );

    });

});