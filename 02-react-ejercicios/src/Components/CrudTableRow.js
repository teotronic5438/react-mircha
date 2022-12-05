import React from 'react';
import Button from 'react-bootstrap/Button';

const CrudTableRow = ({fila}) => {
    // console.log(key);
  return (
    <tr>
        <td>{fila.id}</td>
        <td>{fila.name}</td>
        <td>{fila.constellation}</td>
        <td>
            <Button variant="warning">Editar</Button>{' '}
            <Button variant="danger">Eliminar</Button>{' '}
        </td>
    </tr>
  )
}

export default CrudTableRow