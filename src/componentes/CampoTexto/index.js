import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeHolderModificada = `${props.placeholder}...`;

  const aoDigitado = (event) => {
    if (props.uppercase) {
      props.aoAlterado(event.target.value.toUpperCase());
    } else {
      props.aoAlterado(event.target.value);
    }
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        maxLength={props.maxlength && props.maxlength}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeHolderModificada}
      />
    </div>
  );
};

export default CampoTexto;
