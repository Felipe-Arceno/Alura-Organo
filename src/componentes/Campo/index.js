import "./Campo.css";

const Campo = ({
  type = "text",
  uppercase,
  maxlength,
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  const placeHolderModificada = `${placeholder}...`;

  const aoDigitado = (event) => {
    if (uppercase) {
      aoAlterado(event.target.value.toUpperCase());
    } else {
      aoAlterado(event.target.value);
    }
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        maxLength={maxlength && maxlength}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeHolderModificada}
      />
    </div>
  );
};

export default Campo;
