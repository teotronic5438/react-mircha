import React, {useState, useEffect} from 'react';

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // console.log("Moviendo el scrol");
        // console.log("Fase de Actualizacion");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        // Esta funcion la llama y actualiza el estado, pasa de fase de montaje a fase de actualizacion
        window.addEventListener("scroll", detectarScroll)
    }, [scrollY])

    useEffect(() => {
        // console.log("Fase de Montaje");
    }, []); // Si queremos que se ejecuta solo al iniciar el render, dejar el array vacio
    
    useEffect(() => {
        // console.log("Fase de Actualizacion");
    })

    useEffect(() => {
        return () => {
            // console.log("Fase de DESMONTAJE");
        }
    })
    

    return (
        <div className='text-center'>
            <h2 className='text-primary'>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Scrool Y del Navegador {scrollY} px</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>lorema lorema lorema lorema loremaloremalorema loremalorema lorema</p>
            <p>LLegue hasta el minutos 12:11</p>
        </div>
    )
}
