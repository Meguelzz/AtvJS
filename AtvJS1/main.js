import { pessoa } from  "./pessoa.js";
import { aluno } from  "./aluno.js";
import { professor} from  "./professor.js";

let pessoa = new pessoa("João" , 25 );
let professor = new professor ("Carlos", 18)
let aluno = new aluno ("Pedro", 22);

console.log(pessoa.getNome()); 
console.log(pessoa.getIdade()); 
console.log(pessoa.falar()); 

console.log(professor.getNome()); 
console.log(professor.getIdade()); 
console.log(professor.falar()); 

console.log(aluno.getNome()); 
console.log(aluno.getIdade()); 
console.log(aluno.falar()); 


