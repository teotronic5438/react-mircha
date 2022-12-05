import React from 'react';
import Container from 'react-bootstrap/Container';
import './Estilos.css'

export default function Estilos() {
  return (
    <Container>
        <section className='estilos'>
            <h2>Estilos en React</h2>
            <h3 className='bg-react'>Estilos en hoja css externa</h3>
        </section>
    </Container>
  )
}
