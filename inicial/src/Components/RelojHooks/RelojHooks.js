import React, { useState, useEffect } from 'react';
import Reloj from './Reloj';
import Alert from 'react-bootstrap/Alert';

export default function RelojHooks() {
    // 1) Necesitamos dos variables de estado
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false)
    // let reloj = null;
    // const iniciar = () => {
    //     setVisible(true)
    //     reloj = setInterval(() => {
    //         setHour(new Date().toLocaleTimeString())
    //     }, 1000);
    // }

    // const detener = () => {
    //     clearInterval(reloj);
    //     setVisible(false)
    // }

    useEffect(() => {
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(temporizador);
        }
        return(
            () => {
            //   console.log("Fase de desmontaje");
              clearInterval(temporizador);  
            }
        );

    }, [visible])
    

  return (
    <div className='text-center'>
        <h2 className='text-primary'>Reloj con Hooks</h2>
        <Alert variant="success">
            { visible && <Reloj hour={hour} /> }
        </Alert>
        <button className='btn btn-success mx-2' onClick={() => setVisible(true)}>
            Inciar
        </button>
        <button className='btn btn-danger mx-2' onClick={() => setVisible(false)}>
            Detener
        </button>
    </div>
  )
}
