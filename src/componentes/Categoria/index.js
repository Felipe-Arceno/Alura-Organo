import Card from "../Card";
import "./Categoria.css";

const Categoria = (props) => {
  const css = { backgroundColor: props.corPrimaria };

  return (
    props.veiculos.length > 0 && (
      <section className="categoria" style={css}>
        <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
        <div className="veiculos">
          {props.veiculos.map((veiculo) => (
            <Card
              key={veiculo.modelo}
              marca={veiculo.marca}
              modelo={veiculo.modelo}
              imagem={veiculo.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Categoria;
