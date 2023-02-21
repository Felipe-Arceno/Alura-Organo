import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.aoAlterado(event.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value="">Selecione um Piso</option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
