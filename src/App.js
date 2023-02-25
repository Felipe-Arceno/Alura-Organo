import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Piso from "./componentes/Piso/index.js";
import Formulario from "./componentes/Formulario/index.js";
import Rodape from "./componentes/Rodape/index.js";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [pisos, setPisos] = useState([
    {
      id: uuidv4(),
      nome: "Térreo",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "1° Andar",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "2° Andar",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "3° Andar",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "4° Andar",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "5° Andar",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "6° Andar",
      cor: "#FF8A29",
    },
  ]);
  const VeiculosDB = [
    {
      id: uuidv4(),
      marca: "Volkswagen",
      modelo: "Fusca",
      imagem: "",
      vaga: "01",
      placa: "AAA1234",
      piso: "Térreo",
    },
    {
      id: uuidv4(),
      marca: "Chevrolet",
      modelo: "S10",
      imagem: "",
      vaga: "01",
      placa: "SAD1234",
      piso: "1° Andar",
    },
    {
      id: uuidv4(),
      marca: "Chevrolet",
      modelo: "Onix",
      imagem: "",
      vaga: "02",
      placa: "SVA5134",
      piso: "Térreo",
    },
    {
      id: uuidv4(),
      marca: "Range Rover",
      modelo: "Velar",
      imagem: "",
      vaga: "01",
      placa: "SNX3421",
      piso: "2° Andar",
    },
  ];
  const [veiculosState, setVeiculosState] = useState(VeiculosDB);

  // if (
  //   veiculosState.length > 0 &&
  //   !veiculosState.filter((vei) => vei.modelo === VeiculosDB.modelo)
  // ) {
  //   setVeiculosState([...veiculosState, VeiculosDB]);
  // } else if (veiculosState.length <= 0) {
  //   setVeiculosState([...veiculosState, VeiculosDB]);
  // }

  const aoNovoVeiculoAdicionado = (veiculo) => {
    setVeiculosState([...veiculosState, veiculo]);
  };

  function deletarVeiculo() {}

  function mudarCorPiso(cor, id) {
    setPisos(
      pisos.map((piso) => {
        if (piso.id === id) {
          piso.cor = cor;
        }
        return piso;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        pisos={pisos.map((item) => item.nome)}
        aoVeiculoCadastrado={(veiculo) => aoNovoVeiculoAdicionado(veiculo)}
      />

      {pisos.map((floor) => (
        <Piso
          key={floor.id}
          id={floor.id}
          nome={floor.nome}
          cor={floor.cor}
          veiculos={veiculosState.filter(
            (veiculo) => veiculo.piso === floor.nome
          )}
          aoDeletar={deletarVeiculo}
          mudarCor={mudarCorPiso}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
