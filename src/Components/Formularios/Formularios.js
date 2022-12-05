import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';

export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    console.log(sabor);
    return (
        <>
            <Container>
                <h2 className='text-primary text-center'>Formularios Controlados con Hooks</h2>
                <form>
                    <label htmlFor='nombre'>Nombre:</label>&nbsp;&nbsp;
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}      // asigno el contenido a un estado para que sea controlado
                        onChange={e => setNombre(e.target.value)}   // puedo usar handler o anonima
                    />
                    <p className='my-2'>Elige tu Sabor de JS Favorito</p>
                    <input type="radio" id="vainilla" name="sabor" value="vainilla"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='vainilla'>Vainilla</label>
                    <input type="radio" id="react" name="sabor" value="react"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='react'>React</label>
                    <input type="radio" id="angular" name="sabor" value="angular"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='angular'>Angular</label>
                    <input type="radio" id="vue" name="sabor" value="vue"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='vue'>Vue</label>
                    <input type="radio" id="svelt" name="sabor" value="svelt"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='svelt'>Svelt</label>
                </form>
            </Container>
        </>
    )
}
