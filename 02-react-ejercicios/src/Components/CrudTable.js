import React from 'react';
import Table from 'react-bootstrap/Table';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data}) => {
    // console.log(data);
  return (
    <div className='w-75'>
        <h3 className='text-muted'>Tabla de Datos</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th># ID</th>
                <th>Nombre</th>
                <th>Constelacion</th>
                <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.length === 0 
                    ? <tr><td colSpan="4">Sin datos</td></tr> 
                    : data.map((el, index) => <CrudTableRow key={index} fila={el}/>)
                }
            </tbody>
        </Table>
    </div>
  )
}

export default CrudTable;