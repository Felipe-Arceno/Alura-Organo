import "./Card.css";

const Card = ({ marca, modelo, imagem, corDeFundo }) => {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: corDeFundo }}>
        <img
          src={
            !imagem
              ? "https://th.bing.com/th/id/OIP.MPHViJWLp6XDhy-m_Ae5XAHaHa?pid=ImgDet&rs=1"
              : imagem
          }
          alt="Imagem Veículo"
        />
      </div>
      <div className="card-footer">
        <h4>{marca}</h4>
        <h5>{modelo}</h5>
      </div>
    </div>
  );
};

export default Card;
