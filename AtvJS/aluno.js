import { pessoa } from  "./pessoa.js";


class aluno extends pessoa {
    constructor(nome,idade) {
        super(nome,idade);
        this.nome = nome;
        this.idade = idade;}
        
    falar() {
        return "Perguntando..."}
}

export { aluno };