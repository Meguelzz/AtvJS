import { pessoa } from  "./pessoa.js";

class professor extends pessoa {
    constructor(nome,idade) {
        super(nome,idade);
        this.nome = nome;
        this.idade = idade;}
        
    falar() {
        return "Dando Aula..."}
}

export { professor };