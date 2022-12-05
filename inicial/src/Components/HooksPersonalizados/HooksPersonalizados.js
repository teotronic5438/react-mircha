import React from 'react';
import Container from 'react-bootstrap/Container';
import { useFetch } from '../../hooks/useFetch';
import VisorHook from './VisorHook';

export default function HooksPersonalizados() {
  // console.log(useFetch());
  let url = 'https://pokeapi.co/api/v2/pokemon';
  // url = "https://jsonplaceholder.typicode.com/users";
  let {data, isPending, error} = useFetch(url);
  
  // console.log(data);
  return (
    <Container>
        <h2>HooksPersonalizados</h2>
        <h3> {JSON.stringify(isPending)} </h3>
        <h3><mark> {JSON.stringify(error)} </mark></h3>
        <h3>
          <pre style={{whiteSpace: "pre-wrap"}}>
            <code> {JSON.stringify(data)} </code>
          </pre>
        </h3>
        { !isPending && <VisorHook data={data} />}
    </Container>
  )
}
