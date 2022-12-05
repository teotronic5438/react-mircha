import React from 'react';
import Button from 'react-bootstrap/Button';

const CrudTableRow = ({fila, setDataToEdit, deleteData}) => {
    // Destructuramos la fila con los datos
    let {name, constellation, id} = fila;
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
            <Button variant="warning" onClick={() => setDataToEdit(fila)}>Editar</Button>{' '}
            <Button variant="danger" onClick={() => deleteData(id)}>Eliminar</Button>{' '}
        </td>
    </tr>
  )
}

export default CrudTableRow