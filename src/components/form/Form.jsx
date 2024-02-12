import { useState } from "react";

const Form = () => {

    const [formData,setFormData] = useState({})
    const handleOnchange = (event) => {
        console.log(event);
        const {name, value} = event.target // Destrutturazione dell'oggetto event.target
        setFormData({...formData,[name]:value})  // --> prendi tutto quello che c'è in formData e aggiungi 
    }
    
    const handleSubmit = (ev)=> {
        alert ('Form inviato')
    ev.preventDefault();
    //qua ci sarà una fetch post

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Inserisci nome"
                    onChange={handleOnchange}
                    />
                <input 
                    type="text"
                    name="surname" 
                    placeholder="Inserisci cognome"
                    onChange={handleOnchange}
                    />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Inserisci email"
                    onChange={handleOnchange}
                    />
                <button type="">Invia</button>
            </form>
        </div>
    )
}

export default Form;