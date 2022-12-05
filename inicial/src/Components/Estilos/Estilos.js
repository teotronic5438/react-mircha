import React from 'react';
import Container from 'react-bootstrap/Container';
import './Estilos.css'
// llamo a la hoja de estilos por modulo y la guardo en variable
import moduleStyles from './Estilos.module.css' 
// Import hoja de estilos sass
// import './Estilos.scss'

export default function Estilos() {
  // Puedo cargar los estilos en un objeto
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%"
  }
  return (
    <Container>
        <section className='estilos'>
            <h2 className='titulo'>Estilos en React</h2>
            <h3 className='bg-react'>Estilos en hoja css externa</h3>
            {/* Los estilos se manejan con llaves porque se ponen como expresion de js, ademas los estilos aparecen como objetos */}
            <h3 className='bg-react' style={{borderRadius: ".25rem", margin: "1rem"}}>Estilos en linea "atributo style"</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en linea con variable</h3>
            <hr />
            <h3 className='bg-react'>Agregando Normalize con <br /> <code>@import-normalize</code></h3>
            {/* Estilos como modulos: en el editor losmmuuestra con nombre cambiado */}
            <h3 className={moduleStyles.errore}>Estilos con Modulos</h3>
            <h3 className={moduleStyles.successe}>Estilos con Modulos</h3>
            {/* Estilos con SASS */}
            <h3 className='bg-sass'>Estilos con SASS</h3>
        </section>
    </Container>
  )
}
