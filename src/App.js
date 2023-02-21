import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Categoria from "./componentes/Categoria/index.js";
import Formulario from "./componentes/Formulario/index.js";

function App() {
  const [veiculosState, setVeiculosState] = useState([]);

  const aoNovoVeiculoAdicionado = (veiculo) => {
    setVeiculosState([...veiculosState, veiculo]);
    console.log(veiculosState);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoVeiculoCadastrado={(veiculo) => aoNovoVeiculoAdicionado(veiculo)}
      />
      <Categoria nome="Sedan" />
      <Categoria nome="Hatch" />
      <Categoria nome="Cupê" />
    </div>
  );
}

export default App;
