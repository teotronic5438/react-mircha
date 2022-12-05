import React, {useState, useEffect} from 'react'

function Pokemon({avatar, name}) {
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {
    const [pokemones, setPokemones] = useState([])

    // Usando hooks con peticiones asincronas (async)
    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url);
            let json = await res.json();
            // console.log(json);

            // Con el resultado recorro el array y uso los datos para un nuevo fetch con async y await
            // en reemplazo de promesas
            json.results.forEach(async (element) => {
                let response = await fetch(element.url);
                let json = await response.json()
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                }
    
                setPokemones((pokemones) => [...pokemones, pokemon]);
            });
        }

        getPokemons('https://pokeapi.co/api/v2/pokemon');
    }, [])
    

    // Em el useEffect haremos lo que iba en el componentDidMount
    // Si no especifico el segundo paramettro, cada vez que hay un renderizado del componente se haria la peticion
    // Problema, peticiones que no nos convienen, solucion dejo arreglo vacio y se ejecuta UNA SOLA VEZ
    /*
    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/pokemon';
        fetch(url)
        .then((res) => res.json())
        .then(json => {
            // Ahora con el listado de pokemones recorro el array y hago una nueva peticion para mas info
            json.results.forEach(element => {
                fetch(element.url)
                .then(response => response.json())
                .then(json => {
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    }
        
                    setPokemones((pokemones) => [...pokemones, pokemon]);
                })
                .catch(error => console.error(error));
            });

        });
    }, [])
    */

    return (
        <>
            { 
                pokemones.length === 0
                ? <h3>Cargando...</h3>
                : pokemones.map((el) => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)
            }
        </>
    )
}
