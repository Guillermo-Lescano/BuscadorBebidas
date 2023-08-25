import { Container, Form,  } from "react-bootstrap"
import Formulario from "./components/Formulario"

function App() {

  return (
    <>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container>
        <Formulario />
      </Container>
    </>
  )
}

export default App
