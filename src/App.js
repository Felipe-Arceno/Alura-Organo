import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Piso from "./componentes/Piso/index.js";
import Formulario from "./componentes/Formulario/index.js";
import Rodape from "./componentes/Rodape/index.js";

function App() {
  const Pisos = [
    {
      nome: "Térreo",
      corPrimaria: "#d9f7e9",
      corSecundaria: "#57c278",
    },
    {
      nome: "1° Andar",
      corPrimaria: "#E8F8FF",
      corSecundaria: "#82CFFA",
    },
    {
      nome: "2° Andar",
      corPrimaria: "#F0F8E2",
      corSecundaria: "#A6D157",
    },
    {
      nome: "3° Andar",
      corPrimaria: "#FDE7E8",
      corSecundaria: "#E06B69",
    },
    {
      nome: "4° Andar",
      corPrimaria: "#FAE9F5",
      corSecundaria: "#DB6EBF",
    },
    {
      nome: "5° Andar",
      corPrimaria: "#FFF5D9",
      corSecundaria: "#FFBA05",
    },
    {
      nome: "6° Andar",
      corPrimaria: "#FFEEDF",
      corSecundaria: "#FF8A29",
    },
  ];

  const [veiculosState, setVeiculosState] = useState([]);

  const aoNovoVeiculoAdicionado = (veiculo) => {
    setVeiculosState([...veiculosState, veiculo]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        pisos={Pisos.map((item) => item.nome)}
        aoVeiculoCadastrado={(veiculo) => aoNovoVeiculoAdicionado(veiculo)}
      />

      {Pisos.map((floor) => (
        <Piso
          key={floor.nome}
          nome={floor.nome}
          corPrimaria={floor.corPrimaria}
          corSecundaria={floor.corSecundaria}
          veiculos={veiculosState.filter(
            (veiculo) => veiculo.piso === floor.nome
          )}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
