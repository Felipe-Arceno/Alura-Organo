import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = (props) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [local, setLocal] = useState("");
  const [imagem, setImagem] = useState("");
  const [piso, setPiso] = useState("");
  const [vagasOcupadas, setVagaOcupada] = useState([]);
  const [nomePiso, setNomePiso] = useState("");
  const [corPiso, setCorPiso] = useState("");

  const validaDados = () => {
    let vagaAtual = local;

    if (isNaN(vagaAtual)) {
      alert("Campo ‘Vaga’ deve conter apenas números");
      return;
    } else {
      if (Number(vagaAtual) === 0) {
        alert("Campo ‘Vaga’ não pode ser 0");
        return;
      }

      if (Number(vagaAtual) < Number(10) && vagaAtual.length <= 1) {
        vagaAtual = "0" + vagaAtual;
        setLocal(vagaAtual);
      }

      let Erro = 0;
      vagasOcupadas.forEach((element) => {
        if (element.piso === piso && element.vaga === vagaAtual) {
          alert(`Já existe um veiculo na vaga ${vagaAtual} do ${element.piso}`);
          Erro++;
        }
      });

      if (Erro > 0) return;
    }

    let vagaOcupada = {
      vaga: vagaAtual,
      piso: piso,
    };
    setVagaOcupada([...vagasOcupadas, vagaOcupada]);

    props.aoVeiculoCadastrado({
      id: uuidv4(),
      marca,
      modelo,
      placa,
      vaga: vagaAtual,
      imagem,
      piso,
    });

    setMarca("");
    setModelo("");
    setPlaca("");
    setLocal("");
    setImagem("");
    setPiso("");
  };

  const aoSalvar = (event) => {
    event.preventDefault();

    validaDados();
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do veículo</h2>
        <CampoTexto
          obrigatorio={true}
          label="Marca"
          maxlength="20"
          placeholder="Digite a marca"
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Modelo"
          maxlength="20"
          placeholder="Digite o modelo"
          valor={modelo}
          aoAlterado={(valor) => setModelo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Placa"
          maxlength="7"
          uppercase={true}
          placeholder="Digite a placa"
          valor={placa}
          aoAlterado={(valor) => setPlaca(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Vaga"
          placeholder="Digite o número da vaga do veículo"
          valor={local}
          aoAlterado={(valor) => setLocal(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Piso"
          itens={props.pisos}
          valor={piso}
          aoAlterado={(valor) => setPiso(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>

      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarPiso({ nome: nomePiso, cor: corPiso });
        }}
      >
        <h2>Preencha os dados para criar um novo Piso.</h2>
        <CampoTexto
          obrigatorio
          label="Nome"
          maxlength="20"
          placeholder="Digite o nome do Piso"
          valor={nomePiso}
          aoAlterado={(valor) => setNomePiso(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Cor"
          maxlength="20"
          placeholder="Digite a cor do piso"
          valor={corPiso}
          aoAlterado={(valor) => setCorPiso(valor)}
        />
        <Botao>Criar um novo Piso</Botao>
      </form>
    </section>
  );
};

export default Formulario;
