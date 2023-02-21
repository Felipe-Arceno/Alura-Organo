import Card from "../Card";
import "./Piso.css";

const Piso = (props) => {
  const css = { backgroundColor: props.corPrimaria };

  return (
    props.veiculos.length > 0 && (
      <section className="piso" style={css}>
        <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
        <div className="veiculos">
          {props.veiculos.map((veiculo) => (
            <Card
              corDeFundo={props.corSecundaria}
              key={veiculo.modelo}
              marca={veiculo.marca}
              modelo={veiculo.modelo}
              placa={veiculo.placa}
              imagem={veiculo.imagem}
              vaga={veiculo.local}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Piso;
