export class pessoa{
    nome = '';
    idade = 0;

constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

    fala(){
        console.log(this.nome + ' Falando...')
    }
}