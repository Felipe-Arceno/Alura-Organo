import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Categoria from "./componentes/Categoria/index.js";
import Formulario from "./componentes/Formulario/index.js";
import Rodape from "./componentes/Rodape/index.js";

function App() {
  const Categorias = [
    {
      nome: "Hatch",
      corPrimaria: "#d9f7e9",
      corSecundaria: "#57c278",
    },
    {
      nome: "Sedan",
      corPrimaria: "#E8F8FF",
      corSecundaria: "#82CFFA",
    },
    {
      nome: "SUV",
      corPrimaria: "#F0F8E2",
      corSecundaria: "#A6D157",
    },
    {
      nome: "Cupê",
      corPrimaria: "#FDE7E8",
      corSecundaria: "#E06B69",
    },
    {
      nome: "Picape",
      corPrimaria: "#FAE9F5",
      corSecundaria: "#DB6EBF",
    },
    {
      nome: "Conversível",
      corPrimaria: "#FFF5D9",
      corSecundaria: "#FFBA05",
    },
    {
      nome: "Minivan",
      corPrimaria: "#FFEEDF",
      corSecundaria: "#FF8A29",
    },
  ];

  const [veiculosState, setVeiculosState] = useState([]);

  const aoNovoVeiculoAdicionado = (veiculo) => {
    setVeiculosState([...veiculosState, veiculo]);
    console.log(veiculosState);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        categorias={Categorias.map((item) => item.nome)}
        aoVeiculoCadastrado={(veiculo) => aoNovoVeiculoAdicionado(veiculo)}
      />

      {Categorias.map((categoria) => (
        <Categoria
          key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          veiculos={veiculosState.filter(
            (veiculo) => veiculo.categoria === categoria.nome
          )}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
