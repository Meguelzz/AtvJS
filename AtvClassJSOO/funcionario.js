export class funcionario extends pessoa{
    constructor(nome, idade, cpf) {
        super (nome, idade);
        this.cpf = cpf;
    }
}

import {pessoa} from './pessoa.js';