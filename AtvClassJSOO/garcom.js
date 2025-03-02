export class garcom extends funcionario{
    constructor(nome, idade, cpf) {
        super (nome, idade, cpf);
    }

    serve(){
        console.log(this.nome + ' Servindo...')
    }
}

import {funcionario} from './funcionario.js';