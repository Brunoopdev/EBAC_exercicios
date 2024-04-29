const nomes = [];

class Alunos{
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
}

const bruno = new Alunos('Bruno', 10);
const carlos = new Alunos('Carlos', 4);
const dante = new Alunos('Dante', 7);
const ester = new Alunos('Ester', 9);
const fatima = new Alunos('Fátima', 5);
const gabriel = new Alunos('Gabriel', 3);

nomes.push(bruno, carlos, dante, ester);

nomes.forEach(aluno =>{
    if(aluno.nota >= 6){
        console.log(`O aluno ${aluno.nome} passou com a nota: ${aluno.nota}`);
    }
    // else{
    //     console.log(`O aluno ${aluno.nome} reprovou com a nota: ${aluno.nota}`)
    // }
})
    

