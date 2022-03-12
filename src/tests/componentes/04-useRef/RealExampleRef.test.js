 import React from 'react';
 import { shallow } from 'enzyme';
 import '@testing-library/jest-dom';
 import { renderHook, act } from '@testing-library/react-hooks';

 import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import { MultipleCustomHook } from "../../../components/03-examples/MultipleCustomHook";

 describe('Test in <RealExampleRef.test />', () => {
 
     test('Debe mostrarse correctamente', () => {
 
         const wrapper = shallow( <RealExampleRef /> );
         expect( wrapper ).toMatchSnapshot(); 
         expect( wrapper.find('MultipleCustomHook').exists() ).toBe( false ); 
 
     });


     test('Debe de mostrar el componente', () => {
     
         const wrapper = shallow( <RealExampleRef /> );
         
         // Simula el evento onClick del 'button'
         wrapper.find('button').simulate('click');

         //console.log( wrapper.html() );
         // ENCONTRAR UN COMPONENTE EN EL DOM => BUSCARLO COMO STRING
         expect( wrapper.find( 'MultipleCustomHook' ).exists() ).toBe( true );


     });

 });