import somar from './somar.js';
import subtrair from './subtrair.js';
import multiplicar from './multiplicar.js';
import dividir from './dividir.js';

let operacao = "somar"

switch (operacao) {
    case "somar":
        console.log(somar(2,2))
        break;

    case "subtrair":
        console.log(subtrair(2,2))
        break;

    case "multiplicar":
        console.log(multiplicar(2,2))
        break;

    case "dividir":
        console.log(dividir(2,2))
        break;

    default:
         console.log("Operação inválida")
        break;
}