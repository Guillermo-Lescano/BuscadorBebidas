import { Container, Form } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriaProvider } from "./Context/CategoriasProvider";
import { BebidasProvider } from "./Context/BebidasProvider";
import ListadoBebidas from "./components/ListadoBebidas";

function App() {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
        </Container>
        
      </BebidasProvider>
    </CategoriaProvider>
  );
}

export default App;
