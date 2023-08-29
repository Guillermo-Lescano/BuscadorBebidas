import { Container, Form,  } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriaProvider } from "./Context/CategoriasProvider"

function App() {

  return (
    <CategoriaProvider>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container>
        <Formulario />
      </Container>
    </CategoriaProvider>
  )
}

export default App
