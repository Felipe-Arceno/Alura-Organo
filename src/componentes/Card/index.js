import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src="https://github.com/felipe-arceno.png" alt="Imagem Veículo" />
      </div>
      <div className="card-footer">
        <h4>Volks</h4>
        <h5>Fusca</h5>
      </div>
    </div>
  );
};

export default Card;
