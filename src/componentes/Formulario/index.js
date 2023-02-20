import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const categorias = [
    "Hatch",
    "Sedan",
    "SUV",
    "Picape",
    "Conversível",
    "Station Wagon",
    "Minivan",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do veículo</h2>
        <CampoTexto label="Marca" placeholder="Digite o seu nome" />
        <CampoTexto label="Modelo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Categoria" itens={categorias} />
      </form>
    </section>
  );
};

export default Formulario;
