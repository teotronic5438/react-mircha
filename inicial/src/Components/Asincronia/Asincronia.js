import React from 'react';
import Container from 'react-bootstrap/Container';
import AjaxHooks from './AjaxHooks';

export default function Asincronia() {
  return (
    <Container className='text-center'>
      <h2 className='text-primary'>Peticiones Asincronas en Hooks</h2>
      <AjaxHooks />
    </Container>
  )
}
