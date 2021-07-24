import { useState } from 'react'
import './Button.js'


// Para mostrar uma variável passando como PROPRIEDADE -> colocar sempre chaves entre a palavra { }
// function Button(props) {
//  return (
//     <button>{props.title}</button>
//  );
//}

// Para mostrar uma variável -> colocar sempre chaves entre a palavra { }
// Quando é passada como filho

export default function Button(props) {
    const [counter, setCounter] = useState(0);

    // [estado, alterarEstado]

    function increment() {
        setCounter(counter + 1);
    }

    function reset() {
        setCounter(0);
    }

    return (
        <>
            <span>{counter}</span>
            <button onClick={increment}>{props.title}</button>
            <button onClick={reset}>Reset</button>
            <br />
        </>
    )
}