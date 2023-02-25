import Card from "../Card";
import "./Piso.css";
import hexToRgba from "hex-to-rgba";

const Piso = (props) => {
  const css = { backgroundColor: hexToRgba(props.cor, 0.6) };

  return (
    props.veiculos.length > 0 && (
      <section className="piso" style={css}>
        <input
          value={props.cor}
          type="color"
          className="input-cor"
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
        />

        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div className="veiculos">
          {props.veiculos.map((veiculo) => {
            return (
              <Card
                corDeFundo={props.cor}
                key={veiculo.modelo}
                marca={veiculo.marca}
                modelo={veiculo.modelo}
                placa={veiculo.placa}
                imagem={veiculo.imagem}
                vaga={veiculo.vaga}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Piso;
