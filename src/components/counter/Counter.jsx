import  {UseState, useState} from 'react'

const Counter = ()=>{

    const [counter, setCounter] = useState(0);
    // il componente partirà con un useState di tipo numero inizializzato a 0

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h1>Testo</h1>
            <h2>Il valore del counter è: {counter}</h2>
            <button onClick = {increment}>
                Incrementa
            </button>
            <button onClick = {decrement}>
                Decrementa
            </button>
        </div>
    )
};
export default Counter;