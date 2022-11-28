import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { useFetch } from '../../hooks/useFetch';

export default function VisorHook(props) {
    // const [datapokemon, setDataPokemon] = useState([])
    const pokemones = props.data.results.map((element) => {
        let pokemon;
        fetch(element.url)
        .then(response => response.json())
        .then(json => {
            pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
            }

            // setDataPokemon((datapokemon) => [...datapokemon, pokemon]);
        })
        .catch(error => console.error(error));
        // console.log(pokemon);
        return pokemon;
    });

    return (
        <>
            <Row xs={1} md={2} className="g-2">
                {/* {pokemones && {pokemones} } */}
            </Row>
        </>

    )
    }
