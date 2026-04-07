function Rodape () {
    const anoAtual= new Date().getFullYear()
    return(
        <footer>
            <p>{anoAtual}-Senac São Paulo</p>
        </footer>
    )
}

export default Rodape