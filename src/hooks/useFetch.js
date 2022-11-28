import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);             // estado que guarda la peticion
    const [isPending, setIsPending] = useState(true);   // estado que verifica si la promesa se cumplio
    const [error, setError] = useState(null);           // estado que notifica en caso de que haya error

    useEffect(() => {
        const getData = async (url) => {

            try {
                let res = await fetch(url);

                if(!res.ok){
                    // eslint-disable-next-line no-throw-literal
                    throw {
                        err: true,
                        status: res.status,
                        statusText: !res.statusText ? "Ocurrio un erro" : res.statusText
                    }
                }
                // Si no hubo error, seguimos con la ejecucion
                let data = await res.json();
                // Luego actualizamos los 3 estados
                setIsPending(false);
                setData(data);
                setError({err: false})
            } catch (err) {
                setIsPending(true);
                setError({err})
            }
        }

        getData(url);
    }, [url]);
    // useEffect: codigo pokemones, este efecto se ejecutara cuando cambie la url ahi lo defino

    // Un hook personalizado tiene que retornar ciertos valores
    return {data, isPending, error};
};