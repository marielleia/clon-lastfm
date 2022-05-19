import {probandoTest} from './script.js';

describe ("Probar funciones de Javascript"), () => {
    test ("Las funciones pueden tener 1 parámetro"), () => {
        let message = "sale la lista de musica?"
    
    function probandoTest () {
        return `Hola, ${message}`;
    }
    expect (probandoTest(message)).toBe("Hola, sale la lista de musica?");
}}
