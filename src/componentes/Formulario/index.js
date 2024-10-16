import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data-science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('deu bom');
        
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} key={times}/>
                <Botao>
                        Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario