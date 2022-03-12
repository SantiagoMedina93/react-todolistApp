import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from "../../hooks/useForm";

describe('Test in <useForm.test />', () => {

    const initialForm = {
        name:'Santiago',
        email:'SantiagoMedina@gmail.com'
    }
    
    test('Debe de regresar un formulario por defecto', () => {
        /* toEqual */
        const { result } = renderHook( () => useForm() )
        const [values, handelInputChance, reset] = result.current;
        
        expect(values).toEqual({});
        expect(typeof handelInputChance).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
    
        const { result } = renderHook( () => useForm(initialForm) )
        const [,handelInputChance] = result.current;

        act( () => {

            handelInputChance({
                target:{
                    name:'name',
                    value:'MELISA' 
                }
            });
            
        });
        
        const [formValue] = result.current;
        expect(formValue).toEqual({...initialForm, name: 'MELISA'});

    });

    test('Debe de restablecer el formulario con el Reset', () => {
    
        const { result } = renderHook( () => useForm(initialForm) )
        const [,handelInputChance,reset] = result.current;

        act( () => {

            handelInputChance({
                target:{
                    name:'name',
                    value:'MELISA' 
                }
            });

            reset(); 
            
        });
        
        const [formValue] = result.current;
        expect(formValue).toEqual(initialForm);

    });

       

    
    


});