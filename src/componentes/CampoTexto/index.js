import './CampoTexto.css'

const CampoTexto = (props) => {

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}
                placeholder={`${props.placeholder}...`}
                required={props.obrigatorio}
            />
        </div>
    )
}

export default CampoTexto