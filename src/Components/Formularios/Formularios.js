import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';

/*
export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false)
    console.log(sabor, lenguaje, terminos);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado")
    }

    return (
        <>
            <Container>
                <h2 className='text-primary text-center'>Formularios Controlados con Hooks</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='nombre'>Nombre:</label>&nbsp;&nbsp;
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}      // asigno el contenido a un estado para que sea controlado
                        onChange={e => setNombre(e.target.value)}   // puedo usar handler o anonima
                    />
                    <p className='my-2'>Elige tu Sabor de JS Favorito</p>
                    <input type="radio" id="vanilla" name="sabor" value="vanilla" defaultChecked
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='vanilla'>Vanilla</label>&nbsp;&nbsp;

                    <input type="radio" id="react" name="sabor" value="react"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='react'>React</label>&nbsp;&nbsp;

                    <input type="radio" id="angular" name="sabor" value="angular"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='angular'>Angular</label>&nbsp;&nbsp;

                    <input type="radio" id="vue" name="sabor" value="vue"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='vue'>Vue</label>&nbsp;&nbsp;

                    <input type="radio" id="svelt" name="sabor" value="svelt"
                     onChange={e => setSabor(e.target.value)} />
                    <label htmlFor='svelt'>Svelt</label>&nbsp;&nbsp;

                    <p>Elige tu lenguaje de programacion favorito</p>
                    <select name='lenguaje' onChange={e => setLenguaje(e.target.value)} defaultValue="">
                        <option value="">- - -</option>
                        <option value="js">Javascript</option>
                        <option value="php">PHP</option>
                        <option value="py">Python</option>
                        <option value="go">GO</option>
                        <option value="rb">Ruby</option>

                    </select>
                    <br />
                    <input type="checkbox" id="terminos" name="terminos" onChange={e => setTerminos(e.target.checked)}/> &nbsp;
                    <label htmlFor='terminos'>Acepto términos y condiciones</label>
                    <br />
                    <input type="submit" />
                </form>
            </Container>
        </>
    )
}

*/
// Ahora todo el formulario manejado con un solo estado
export default function Formularios() {
    const [form, setForm] = useState({})

    // Manejo del formulario con react y estados
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChecked = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado")
    }

    return (
        <>
            <Container>
                <h2 className='text-primary text-center'>Formularios Controlados con Hooks</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='nombre'>Nombre:</label>&nbsp;&nbsp;
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.name}      // asigno el contenido a un estado para que sea controlado
                        onChange={handleChange}   // puedo usar handler o anonima
                    />
                    <p className='my-2'>Elige tu Sabor de JS Favorito</p>
                    <input type="radio" id="vanilla" name="sabor" value="vanilla" defaultChecked
                     onChange={handleChange}  />
                    <label htmlFor='vanilla'>Vanilla</label>&nbsp;&nbsp;

                    <input type="radio" id="react" name="sabor" value="react"
                     onChange={handleChange}  />
                    <label htmlFor='react'>React</label>&nbsp;&nbsp;

                    <input type="radio" id="angular" name="sabor" value="angular"
                     onChange={handleChange} />
                    <label htmlFor='angular'>Angular</label>&nbsp;&nbsp;

                    <input type="radio" id="vue" name="sabor" value="vue"
                     onChange={handleChange}  />
                    <label htmlFor='vue'>Vue</label>&nbsp;&nbsp;

                    <input type="radio" id="svelt" name="sabor" value="svelt"
                     onChange={handleChange} />
                    <label htmlFor='svelt'>Svelt</label>&nbsp;&nbsp;

                    <p>Elige tu lenguaje de programacion favorito</p>
                    <select name='lenguaje' onChange={handleChange}  defaultValue="">
                        <option value="">- - -</option>
                        <option value="js">Javascript</option>
                        <option value="php">PHP</option>
                        <option value="py">Python</option>
                        <option value="go">GO</option>
                        <option value="rb">Ruby</option>

                    </select>
                    <br />
                    <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked} /> &nbsp;
                    <label htmlFor='terminos'>Acepto términos y condiciones</label>
                    <br />
                    <input type="submit" />
                </form>
            </Container>
        </>
    )
}