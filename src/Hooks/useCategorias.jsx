import { useContext } from "react";
import CategoriaContext from "../Context/CategoriasProvider";

const useCategoria = () => {
    return useContext(CategoriaContext)
}

export default useCategoria