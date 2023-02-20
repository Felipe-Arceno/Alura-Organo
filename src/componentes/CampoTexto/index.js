import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeHolderModificada = `${props.placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={placeHolderModificada} />
    </div>
  );
};

export default CampoTexto;
