import { Button, Card, Col } from "react-bootstrap";
import useBebidas from "../Hooks/useBebibas";

const Bebida = ({ bebida }) => {
  const { handleModalClick } = useBebidas();

  return (
    <Col md={4} lg={3}>
      <Card className="my-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
      </Card>
      <Card.Body>
        <Card.Title>{bebida.strDrink}</Card.Title>
        <Button
          variant="warning"
          className="w-100 text-Uppercase mt-2"
          onClick={() => {
            handleModalClick()
          }}
        >
          Ver Reseta
        </Button>
      </Card.Body>
    </Col>
  );
};

export default Bebida;
