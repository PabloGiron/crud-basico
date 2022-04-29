import {Card, Button} from 'react-bootstrap'
import React from 'react'

export const Cards = ({id, nombre, nit, fecha, direccion, updateCompany, deleteCompany}) => {
  return (

    <Card>
        <Card.Header>{id}</Card.Header>
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
            {`Dirección: ${direccion},
                 Nit: ${nit}
                 Fecha: ${fecha}`}
        </Card.Text>
        <Button onClick={() => updateCompany(id,nombre, nit, direccion)} variant="primary">Modificar</Button>
        <Button onClick={() => deleteCompany(id)} variant="primary">Eliminar</Button>
        </Card.Body>
    </Card>
  )
}
