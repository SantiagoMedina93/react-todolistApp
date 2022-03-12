import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';


describe('Test in <useCounter.test />', () => {

    test('Debe de retornar valores por defecto', () => {

        const { result } = renderHook( () => useCounter() )
        
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });

    test('Debe de tener el counter en 100', () => {

        const { result } = renderHook( () => useCounter(100) )
        expect(result.current.counter).toBe(100);
        
    });

    test('Debe de incrementar el counter en 1', () => {
    
        const { result } = renderHook( () => useCounter(100) ); 
        const { increment } = result.current;

        // Fn act permite ejecutar las funciones de los hooks en el entorno de pruebas
        act( () => {

            increment();
            // Al estar en el entorno de pruebas al cambiar el valor del state el componente 
            // no se vuelve a renderizar por lo que ejecutar 2 o más veces una fn genera el 
            // mismo resultado.

            // Ejemplo:
            // increment();  ==> setCounter(100 + 1)
            // increment();  ==> setCounter(100 + 1)
            
            // Para solucionar esto se debe utilizar un callback en la fn que modifique el state
            // De esta forma se tomara el valor mas reciente del state y se podran ejecutar 2 o 
            // más veces cualquier fn. 

            // setCouter(counter + 1) ===> setCouter((counter) => counter + 1)
        });
        // DESESTRUCTURAR EL STATE AL FINALIZAR LA EJECUCIÓN DE LAS FN 
        // Y ANTES DE LOS TESTS
        const { counter } = result.current;
        /* console.log(counter); */
        expect(counter).toBe(101);

    }); 

    test('Debe de decrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {

            decrement();
            
        });

        const { counter } = result.current;
        expect(counter).toBe(99);
    
    });

    test('Debe de resetear el counter y devolver el valor inicial', () => {
    
        const { result } = renderHook( () => useCounter(100) );
        const { decrement, reset } = result.current;
        
        act( () => {

            decrement();
            reset();
        });


        const { counter } = result.current;
        expect(counter).toBe(100);

    });
})