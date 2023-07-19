function Formulario({eventoTeclado, cadastrar}){
    
    return(
        
        <form>
            <input type="text" onChange={eventoTeclado} name='nome' placeholder="Nome" className="form-control"></input>
            <input type="text" onChange={eventoTeclado} name='genero' placeholder="Gênero" className="form-control"></input>
            <input type="text" onChange={eventoTeclado} name='desenvolvedora' placeholder="Desenvolvedora" className="form-control"></input>
            <input type="text" onChange={eventoTeclado} name='anoLancamento' placeholder="Ano-Lancamento" className="form-control"></input>
            <input type="text" onChange={eventoTeclado} name='precoJogo' placeholder="Preço-Jogo" className="form-control"></input>


            <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary"></input>

        </form>
    )
}

export default Formulario