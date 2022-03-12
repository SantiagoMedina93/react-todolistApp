import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'

import { HomeScreen } from'../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test in <HomeScreen.test />', () => {

    test('Debe de mostrarse correctamente', () => {

        const user = {
            name: 'Fernando',
            email: 'fernando@gmail.com'
        }

        // El mount se utiliza para renderizar componente padre e hijo
        // Shallow => Solo renderiza 1 componente
        const wrapper = mount( 
            <UserContext.Provider value={{
                user
            }}>
                <HomeScreen /> 

            </UserContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });
});