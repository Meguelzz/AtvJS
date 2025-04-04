import { pessoa } from  "./pessoa.js";
import { aluno} from  "./aluno.js";
import { professor} from  "./professor.js";

        let pedro = new pessoa ("Pedro" , 19 );
        let lucas = new professor ("Lucas", 20)
        let miguel = new aluno ("Miguel", 18);

        
    console.log(pessoa.getNome);
    console.log(pessoa.getIdade);
    console.log(pessoa.falar);


    console.log(professor.getNome);
    console.log(professor.getIdade);
    console.log(professor.falar);


    console.log(aluno.getNome);
    console.log(aluno.getIdade);
    console.log(aluno.falar);


