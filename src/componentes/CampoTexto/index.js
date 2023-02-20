import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeHolderModificada = `${props.placeholder}...`;

  let valor = "";

  const aoDigitado = (event) => {
    valor = event.target.value;
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeHolderModificada}
      />
    </div>
  );
};

export default CampoTexto;
