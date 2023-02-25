import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Piso from "./componentes/Piso/index.js";
import Formulario from "./componentes/Formulario/index.js";
import Rodape from "./componentes/Rodape/index.js";
import { v4 as uuidv4 } from "uuid";
import { ListaVeiculosInicial, ListaPisosInicial } from "./db/index.js";
import HideForm from "./componentes/HideForm/index.js";

function App() {
  const [pisos, setPisos] = useState(ListaPisosInicial);
  const [veiculosState, setVeiculosState] = useState(ListaVeiculosInicial);
  const [formVisible, setFormVisible] = useState(false);

  const aoNovoVeiculoAdicionado = (veiculo) => {
    setVeiculosState([...veiculosState, veiculo]);
  };

  function deletarVeiculo(id) {
    setVeiculosState(veiculosState.filter((vei) => vei.id !== id));
  }

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

  function cadastrarPiso(NovoPiso) {
    setPisos([...pisos, { ...NovoPiso, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setVeiculosState(
      veiculosState.map((veiculo) => {
        if (veiculo.id === id) {
          veiculo.favorito = !veiculo.favorito;
        }
        return veiculo;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <HideForm
        title="Meu Estacionamento"
        estadoAtual={formVisible}
        escondeForm={(valor) => setFormVisible(valor)}
      />

      {formVisible && (
        <Formulario
          cadastrarPiso={cadastrarPiso}
          pisos={pisos.map((item) => item.nome)}
          aoVeiculoCadastrado={(veiculo) => aoNovoVeiculoAdicionado(veiculo)}
        />
      )}

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
          aoFavoritar={resolverFavorito}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
