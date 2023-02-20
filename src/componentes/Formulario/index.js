import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
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

  const aoSalvar = (event) => {
    event.preventDefault();

    console.log("Form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do veículo</h2>
        <CampoTexto
          obrigatorio={true}
          label="Marca"
          placeholder="Digite a marca"
        />
        <CampoTexto
          obrigatorio={true}
          label="Modelo"
          placeholder="Digite o modelo"
        />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa
          obrigatorio={true}
          label="Categoria"
          itens={categorias}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
