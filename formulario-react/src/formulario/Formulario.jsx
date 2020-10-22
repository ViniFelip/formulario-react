import React, { useState } from 'react'


function Formulario() {
    const [pessoa, alteraPessoa] = useState({})

    function onChangeUm(evento) {
        alteraPessoa({
            ...pessoa,
            nome: evento.target.value
        })

    }
    function onChangeDois(evento) {
        alteraPessoa({
            ...pessoa,
            DataNascimento: evento.target.value
        })
    }

    function onChangetres(evento) {
        alteraPessoa({
            ...pessoa,
            Telefone: evento.target.value
        })
    }
    function onChangeQuatro(evento) {
        alteraPessoa({
            ...pessoa,
            Email: evento.target.value
        })
    }
    function onChangeCinco(evento) {
        alteraPessoa({
            ...pessoa,
            cep: evento.target.value
        })
    }

    function onChangeSeis(evento) {
        alteraPessoa({
            ...pessoa,
            cidade: evento.target.value
        })
    }
    function onChangeSete(evento) {
        alteraPessoa({
            ...pessoa,
            estado: evento.target.value
        })
    }
    function onChangeOito(evento) {
        alteraPessoa({
            ...pessoa,
            Trabalha: evento.target.checked
        })
    }




    return <>
    <h1>Coloque seus dados</h1>
    <form>

        Nome:<input onChange={onChangeUm} type='text' name='nome' id='1' /> <br></br>
        Data de Nascimento: <input onChange={onChangeDois} type='date' name='DataNascimento' id='2' /><br></br>
        Telefone:<input onChange={onChangetres} type='text' name='Telefone' id='3' /><br></br>
        E-mail<input onChange={onChangeQuatro} type='text' name='Email' id='4' /><br></br>
        Cep<input onChange={onChangeCinco} type='text' name='cep' id='5' /><br></br>
        Cidade<input onChange={onChangeSeis} type='text' name='cidade' id='6' /><br></br>
        Estado<input onChange={onChangeSete} type='text' name='estado' id='7' /><br></br>
        trabalha:<input onChange={onChangeOito} type='Checkbox' name='Trabalha' id='8' /><br></br>


        <p>nome:{pessoa.nome}</p>
        <p>Data de Nascimento:{pessoa.DataNascimento}</p>
        <p>Telefone:{pessoa.Telefone}</p>
        <p>E-mail:{pessoa.Email}</p>
        <p>Cep:{pessoa.cep}</p>
        <p>Cidade:{pessoa.cidade}</p>
        <p>Estado:{pessoa.estado}</p>

    </form>
</>
}


export default Formulario