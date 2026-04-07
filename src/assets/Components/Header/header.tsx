function Header() {
    const nomeCurso = "Técnico em Desenvolvimento de sistemas"
    const Ano = new Date().getFullYear()

    return(
        <>
	<header>
		<h1>Curso: {nomeCurso}</h1>
		<h2>Ano: {Ano}</h2>
	</header>
        </>
    
    )
}

export default Header