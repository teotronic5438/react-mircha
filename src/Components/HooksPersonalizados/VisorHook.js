import React from 'react';

export default function VisorHook(props) {
    // const [datapokemon, setDataPokemon] = useState([])
    const pokemones = props.data.results.map((element, index) => <div>
        <p className='text-success' key={index}>Pokemon: {element.name}</p>
        <p className='text-primary'>URL: {element.url}</p>
    </div>);

    return (
        <>
            {pokemones}
        </>

    )
    }
