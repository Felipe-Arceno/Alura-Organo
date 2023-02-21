import Card from "../Card";
import "./Categoria.css";

const Categoria = (props) => {
  const css = { backgroundColor: props.corPrimaria };

  return (
    <section className="categoria" style={css}>
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
      <Card marca={"Volks"} />
      <Card marca={"Volks"} />
    </section>
  );
};

export default Categoria;
