import "./Card.css";

const Card = ({ marca, modelo, imagem }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={imagem} alt="Imagem Veículo" />
      </div>
      <div className="card-footer">
        <h4>{marca}</h4>
        <h5>{modelo}</h5>
      </div>
    </div>
  );
};

export default Card;
