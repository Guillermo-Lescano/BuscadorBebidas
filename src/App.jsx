import { Container, Form } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriaProvider } from "./Context/CategoriasProvider";
import { BebidasProvider } from "./Context/BebidasProvider";

function App() {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container>
          <Formulario />
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  );
}

export default App;
