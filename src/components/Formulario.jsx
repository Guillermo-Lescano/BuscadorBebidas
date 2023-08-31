import React from "react";
import { useState } from "react";
import useCategoria from "../Hooks/useCategorias";
import useBebidas from "../Hooks/useBebibas";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [alerta, setAlerta] = useState('')
  const { categorias } = useCategoria();
  const {consultarBebidas} = useBebidas();

  const handleSubmit =(e) =>{
    e.preventDefault()

    if(Object.values(busqueda).includes('')){
      setAlerta('Todos los campos son obligatioris')
      return
    }
    setAlerta('')
    consultarBebidas(busqueda)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert> }
      <Row style={{margin:8}}>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              id="nombre"
              name="nombre"
              placeholder="Ej: Tequila, Vodka, etc.."
              type="text"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>- Seleccione una categoria -</option>
              {categorias.map((cat) => (
                <option key={cat.strCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button variant="danger" className="text-uppercase w-100" type="submit">
            Buscar Bebida
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
