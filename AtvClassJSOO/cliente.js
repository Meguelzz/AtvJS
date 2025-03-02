export class cliente extends pessoa{
    constructor(nome, idade, cpf) {
        super (nome, idade, cpf);
       }

    come(){
        console.log(this.nome + ' Comendo...')
    }
}

import {pessoa} from './pessoa.js';