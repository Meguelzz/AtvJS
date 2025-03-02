export class cozinheiro extends funcionario{
    constructor(nome, idade, cpf){
    super (nome, idade, cpf)
    }

    cozinha(){
        console.log(this.nome + ' Cozinhando...')
    }
}

import {funcionario} from './funcionario.js';