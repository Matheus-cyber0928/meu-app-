interface CardAlunoProps {

  nomeAluno: string
  curso: string
  textoAluno: string;
  status: boolean
}

function CardAluno({nomeAluno, curso, textoAluno, status =true}: CardAlunoProps) {
 

  return (
    <div>
      <h2>{nomeAluno}</h2>
      <h3>Curso:{curso}</h3>
      <p>{textoAluno}</p>
      <p>status:{status} </p>
    </div>
  );
}

export default CardAluno;
