import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    // Variable de tipo useState
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.name || !form.constellation){
            alert("datos incompletos");
            return;
        }

        if(form.id === null){
            createData(form)
        } else {
            updateData(form)
        }

        handleReset();
    }

    const handleReset = (e) => {
        // No solo debe limpiar el estado sino tambien el estado de la aplicacion
        setForm(initialForm)
        setDataToEdit(null);
    }


    return (
        <div className='w-50'>
            <h3 className='text-muted'>Agregar</h3>
            <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Group className="m-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Ingrese su nombre" onChange={handleChange} 
                    value={form.name} />
                </Form.Group>

                <Form.Group className="m-3">
                    <Form.Label>Constelacion</Form.Label>
                    <Form.Control name='constellation' type="text" placeholder="Ingrese su Constelacion"
                    onChange={handleChange} value={form.constellation} />
                </Form.Group>

                <Button variant="primary" type="submit" className='my-5'>
                    Enviar
                </Button>
                &nbsp;&nbsp;
                <Button variant="success" type="reset" onClick={handleReset} className='my-5'>
                    Limpiar
                </Button>
            </Form>
        </div>
  )
}

const initialForm = {
    name: '',
    constellation: '',
    id: null
}

export default CrudForm