import "./HideForm.css";
import { BiAddToQueue } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const HideForm = (props) => {
  function escondeFormulario() {
    props.escondeForm(!props.estadoAtual);
  }

  return (
    <div className="container">
      <h2>{props.title}</h2>
      <button className="botao-hide" onClick={escondeFormulario}>
        {props.estadoAtual ? (
          <MdClose size={50} color="white" />
        ) : (
          <BiAddToQueue size={50} color="white" />
        )}
      </button>
    </div>
  );
};

export default HideForm;
