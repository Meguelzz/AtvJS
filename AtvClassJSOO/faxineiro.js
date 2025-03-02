export class faxineiro extends funcionario{
    constructor(nome, idade, cpf){
    super (nome, idade, cpf)
    }

    limpa(){
        console.log(this.nome + ' Limpando...')
    }
}

import {funcionario} from './funcionario.js';