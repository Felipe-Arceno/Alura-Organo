import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [local, setLocal] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();

    props.aoVeiculoCadastrado({
      marca,
      modelo,
      local,
      imagem,
      categoria,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do veículo</h2>
        <CampoTexto
          obrigatorio={true}
          label="Marca"
          placeholder="Digite a marca"
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Modelo"
          placeholder="Digite o modelo"
          valor={modelo}
          aoAlterado={(valor) => setModelo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Local"
          placeholder="Digite o local do veículo"
          valor={local}
          aoAlterado={(valor) => setLocal(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Categoria"
          itens={props.categorias}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
