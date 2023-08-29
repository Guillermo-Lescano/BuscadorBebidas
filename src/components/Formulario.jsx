import React from "react";
import useCategoria from "../Hooks/useCategorias";
import { Button, Form, Row, Col } from "react-bootstrap";

const Formulario = () => {
  const { categorias } = useCategoria();
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              id="nombre"
              name="nombre"
              placeholder="Ej: Tequila, Vodka, etc.."
              type="text"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select id="categoria" name="categoria">
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
          <Button
            variant="danger"
            className="text-uppercase w-100"
          >Buscar Bebida</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
