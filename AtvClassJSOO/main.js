window.alert("Bem-vindo!");

let clClebinho = new cliente('Clebinho', 30);
clClebinho.nome = 'Clebinho';

let clZeca = new cliente('Zeca', 27);
clZeca.nome = 'Zeca';

console.log(clClebinho.nome);
console.log(clZeca.nome);

clClebinho.come();
clZeca.fala();

let gHugo = new garcom('Hugo', 18, 1);
gHugo.nome = 'Hugo';

let gJose = new garcom('José', 19, 2);
gJose.nome = 'José';

let gLuiz = new garcom('Luiz', 19, 3);
gLuiz.nome = 'Luiz';

console.log(gHugo.nome);
console.log(gJose.nome);
console.log(gLuiz.nome);

gHugo.serve();
gJose.serve();
gLuiz.serve();

let coSheila = new cozinheiro('Sheila', 32, 4);
coSheila.nome = 'Sheila';

let coPaulo = new cozinheiro('Paulo', 37, 5);
coPaulo.nome = 'Paulo';

console.log(coSheila.nome);
console.log(coPaulo.nome);

coSheila.cozinha();
coPaulo.cozinha();

let fMaria = new faxineiro('Maria', 41, 555)
fMaria.nome = 'Maria';

let fCarlos = new faxineiro('Carlos', 38, 666)
fCarlos.nome = 'Carlos';

console.log(fMaria.nome);
console.log(fCarlos.nome);

fMaria.limpa();
fCarlos.limpa();

import {pessoa} from './pessoa.js';
import {funcionario} from './funcionario.js';
import {garcom} from './garcom.js';
import {faxineiro} from './faxineiro.js';
import {cozinheiro} from './cozinheiro.js';
import {cliente} from './cliente.js';