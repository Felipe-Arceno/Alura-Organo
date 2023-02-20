import Banner from "./componentes/Banner/Banner.js";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" />
      <CampoTexto label="Cargo" />
      <CampoTexto label="Imagem" />
    </div>
  );
}

export default App;
