// Comando "prompt ()" = receber informação do usuário
prompt ("Digite o seu nome completo:");

// Comando "console.log ()" = imprime uma mensagem ao usuário
console.log ("Meu nome é Diego Carravetta");

// Comando "alert ()" = também imprime uma mensagem ao usuário
alert ("Meu nome é Diego Carravetta");

// var, let e const são denominações de variáveis
// Só domina a mesma variável uma vez
var nome1; // perdeu o uso
let nome2; // let recebem qualquer valor e mudam
const nome3 = 0; // const recebem / iniciam com valores que não vão mudar

nome2 = prompt("Qual o seu nome?");
console.log ("Olá " + nome2 + ", é um prazer te conhecer"); // o + junta informações e variáveis (concatenação)

// Variáveis armazenam números inteiros (integers)
// Variáveis armazenam números decimais (floats ou floating point numbers)
let numero1 = 17; // Sem "", diferente de string que precisa delas

// Variáveis armazenam letras (string) usando "" simples ou dupla
let frase1 = "Diego Carravetta"
console.log (frase1);

// Variáveis retornam valores boleanos (booleans) como verdadeiro ou falso
let teste1 = 6 < 3; // o teste usa o operador < (menor que)
console.log (teste1); // vai retornar "false"

// o === vai fazer o mesmo teste
teste1 === 4;
console.log (teste1);

// Variáveis armazenam array (multiplos valores em uma única variável)
let array1 = ["Diego", "Silvane"]; // a informação fica entre []
let array2 = [32, 52];
array1 [0]; // array não precisa do comando console.log para imprimir a informação
array2 [0]; // o valor dentro do [] são chamados de índice e indica qual posição imprimir, sendo que acontagem sempre começa do 0

// Operadores são símbulos matemáticos que retorna um valor entre duas variáveis
// + soma ou junta strings
let numero2 = 3;
let resultado1;
console.log (resultado1 = numero1 + numero2);

// a mesma coisa acontece com - / *
console.log (resultado1 = numero1 - numero2);
console.log (resultado1 = numero1 / numero2);
console.log (resultado1 = numero1 * numero2);

// ! é o operador de negação
let numero4 = 3;
! (numero4 === 3); // o resultado é falso porque eu nego a informação

// !== é o operador de não igual
numero4 = 3;
numero4 !== 3; // o resultado é falso porque é igual