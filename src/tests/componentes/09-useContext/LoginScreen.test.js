import React from "react";
import { mount } from "enzyme";

import { LoginScreen } from '../../../components/09-useContext/LoginScreen'
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Test in <LoginScreen.test />', () => {
    
    const setUser = jest.fn();
    
    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser  // setUser = setUser:setUser
        }}>         
            <LoginScreen /> 
        </UserContext.Provider>
    )

    test('Debe de mostrarse corrcetamente', () => {

        expect( wrapper ).toMatchSnapshot();


    });

    test('Debe de ejecutar el setUser con el argumento esperado', () => {
        
        //SI hubiera usado el shallow solo se renderizaba el LoginScreen y no tengo el boton
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id:1234,
            name: 'Santiago'
        })
    

    });
});