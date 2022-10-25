//g - global- (encontra todas as ocorrencias) EX.: const regExp1 = /joão/g; 
//i - insensitive (case insensitive)  EX.: const regExp1 = /joão/gi;
// ( ) posso ter (()())- grupos
//  | - ou

const { texto } = require('./base')

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);
}





// Expresoes regulares servem para ser usada como padrão oara encontrar coisas dentro de uma string.
// dentro das expressoes regulares apos as barras ( // ) tem as flags que pode mudar o comportamento das expressoes