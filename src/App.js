import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
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
    </div>
  );
}

export default App;
