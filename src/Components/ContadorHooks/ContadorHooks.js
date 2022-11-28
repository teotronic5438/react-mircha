import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';

export default function ContadorHooks(props) {
    const [contador, setContador] = useState(0);

    const sumar= () => setContador(contador + 1);
    const restar= () => setContador(contador - 1);

    return (
        <div className='text-center'>
            <h2 className='text-primary'>Hooks - useState</h2>
            <Button className='m-2' onClick={sumar}>Sumar +</Button>
            <Button className='m-2' onClick={restar}>Restar -</Button>
            <Alert>Contador de {props.titulo}: {contador}</Alert>
        </div>
    )
}
// Propiedades por defecto
ContadorHooks.defaultProps = {
    titulo: "Clicks"
};