import React from 'react';
import Container from 'react-bootstrap/Container';
import CrudApp from './Components/CrudApp';

function App() {

  return (
    <Container>
        <h1 className='text-center text-primary my-2'>Ejercicios con React</h1>
        <CrudApp />
    </Container>
  );
}

export default App;
