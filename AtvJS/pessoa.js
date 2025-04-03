class pessoa {
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;}
    
    getNome() {
        return (this.nome);}

    getIdade() {
        return (this.idade);}

    falar() {
        return "Falando...."}

}

export { pessoa };