function Tabela({vetor}){
    return(
        <table className="table table-striped table-bordered table-hover table-responsive">
            <thead >
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Gênero</th>
                    <th>Desenvolvedora</th>
                    <th>Ano-Lancamento</th>
                    <th>Preço-Jogo</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice)=>(
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.genero}</td>
                            <td>{obj.desenvolvedora}</td>
                            <td>{obj.anoLancamento}</td>
                            <td>{obj.precoJogo}</td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

    
export default Tabela