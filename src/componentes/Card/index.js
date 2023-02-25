import { AiFillCloseCircle } from "react-icons/ai";
import "./Card.css";

const Card = ({
  marca,
  modelo,
  imagem,
  corDeFundo,
  vaga,
  placa,
  aoDeletar,
}) => {
  return (
    <div className="card">
      <AiFillCloseCircle size={30} className="deletar" onClick={aoDeletar} />

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
        <div>
          <ul>
            <li>
              <h5>{placa}</h5>
            </li>
            <li>
              <h5>Vaga: {vaga}</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
