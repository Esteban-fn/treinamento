/* Para testar console.log basta abrir terminal, cd scripts / node script.js */

/* Váriaveis
    const -> é uma constante, não pode alterar seu valor.
    let -> é um contador, pode alterar o valor.
    var -> é a maneira antiga, existia apenas o var (não recomendado).
*/

const abacate = "Olá Mundo!"
const nmr = 30

console.log(abacate)
console.log(nmr)


/* Tipos de Dados
    strings -> texto
    numbers -> núimeros
    boolean -> booleano, verdadeiro ou falso
    object -> objetos, agrupa vários dados em um lugar só
    null e undefined -> nulo e indefinido, falta de informação. Null é a falta de informação que você decide, undefined é cagada o dev.
    array -> matriz, agrupa muitas informações (sempre começa contar o do 0)

    ' e " -> mesma coisa
    ` ` -> posso pular linhas e misturar texto com variáveis, assim: ${variável}
*/

/* strings */
const texto = `Olá, Mundo" ${nmr}`
console.log(texto)

/* numbers */
const numero = 100 - 50
console.log(numero)

const variavel = false /* boolean */

/* object */
const nome = "Rodolfo"
const idade = 30
const casado = true

const usuario = {
    nome: "Rodolfo",
    idade: 30, 
    casado: false, /* se for true o conjuge será adicionado */
    conjuge: null /* null */
}

console.log(usuario.nome) /* se eu adicionar um "." após o objeto ele puxa apenas a variável que eu colocar posteriormente, no caso: "nome" */

/* array */
const meuArray = [
    {
    nome: "Esteban",
    idade: 20, 
    casado: null,
    conjuge: false
},
    {
    nome: "João",
    idade: 22, 
    casado: null,
    conjuge: false
}]

const usuarios = ["João", "Esteban", "Blenda"]
console.log(usuarios[0]) /* posição 0 = João */












