import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const consultarBebidas = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
      const { data } = await axios(url);
      setBebidas(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => setOpenModal(!openModal);
 
  return (
    <BebidasContext.Provider value={{ consultarBebidas, bebidas,handleModalClick, openModal }}>
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
