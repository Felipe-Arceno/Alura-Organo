import "./Categoria.css";

const Categoria = (props) => {
  return (
    <section className="categoria">
      <h3>{props.nome}</h3>
    </section>
  );
};

export default Categoria;
