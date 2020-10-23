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
            dataNascimento: evento.target.value
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
            trabalha: evento.target.value === 'sim'
        })
    }




    return <>
        <h1>Coloque seus dados</h1>
        <form>

            <div><input onChange={onChangeUm} type='text' placeholder='Nome' name='nome' id='a1' /></div>
            <div><input onChange={onChangeDois} type='date'  name='dataNascimento' id='a2' /></div>
            <div><input onChange={onChangetres} type='tel' placeholder='Telefone' name='Telefone' id='a3' /></div>
            <div><input onChange={onChangeQuatro} type='email' placeholder='E-mail' name='Email' id='a4' /></div>
            <div><input onChange={onChangeCinco} type='text' placeholder='CEP' name='cep' id='a5' /></div>
            <div><input onChange={onChangeSeis} type='text' placeholder='Cidade' name='cidade' id='a6' /></div>
            <div><input onChange={onChangeSete} type='text' placeholder='Estado' maxlength="2" name='estado' id='a7' /></div>
            <div>
                <label>Trabalhando?</label>
            Sim<input onChange={onChangeOito} type='radio' name='trabalha' value='sim' />
            Não<input onChange={onChangeOito} type='radio' name='trabalha' value='não' />
            </div>

            <p>nome: {pessoa.nome}</p>
            <p>Data de Nascimento: {pessoa.datanascimento}</p>
            <p>Telefone: {pessoa.telefone}</p>
            <p>E-mail: {pessoa.email}</p>
            <p>Cep: {pessoa.cep}</p>
            <p>Cidade: {pessoa.cidade}</p>
            <p>Estado: {pessoa.estado}</p>

            <p>{pessoa.nome} está {pessoa.trabalha ? 'trabalhando!' : 'procurando emprego!'}</p>

        </form>
    </>
}


export default Formulario