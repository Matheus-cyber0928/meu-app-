import CardAluno from "../CardAluno/CardAluno"
import Header from "../Header/header"
import Rodape from "../Rodape/Rodape"
import "./HomePage.css"

interface Aluno {
    id: number
    nome: string
    curso: string
    descricao: string
    status: boolean
}

const alunos:Aluno[] = [
    {id:1, nome:"Diego Aquilla", curso:"TDS03", descricao:"Aluno inteligente", status:true},
    {id:2, nome:"Heitor Aquilla", curso:"TDS03", descricao:"Aluno soda", status:true},
    {id:3, nome:"Benjamin Dominique", curso:"TDS03", descricao:"Aluno soda", status: false},
    {id:4, nome:"Rai Capinam", curso:"TDS03", descricao:"joga muito no são paulo", status: false}
] 

function HomePage() {
 const nomeCurso = "Técnico em Desenvolvimento de sistemas"
 const ano = new Date().getFullYear()

return(
    <>
	<header>
		<h1>Senac - {nomeCurso}</h1>
		<h2>Ano: {ano}</h2>
	</header>

    <div className="container-cards"></div>
{
    alunos.map((aluno) => (
        <CardAluno
        key={aluno.id}
        nomeAluno={aluno.nome}
        curso={aluno.curso}
        textoAluno={aluno.descricao}
        status={aluno.status}
        />
    ))

}
    <div />

    <Rodape/>

    </>
    )
}


export default HomePage