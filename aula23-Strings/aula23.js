//               01234567
let umaString = "Um texto" 
//a barra invertida serve como valvula de escapa 
//para poder utilizar a mesma aspas dupla dentro da aspas duplas.

// abaixo temos 3 maneiras de se fazer concatenação
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

// indexoff = busca a posição a palavra ou letra e retorna a posição começando da esquerda pra direita.
// lastindexoff = busca a posição da direita pra esquerda.

// O método match() retorna uma correspondência entre uma string com uma expressão regular.

/*Se o sinalizador g for usado, 
todos os resultados correspondentes à expressão regular serão retornados, mas a captura de grupos não.
se o sinalizador g não for usado, apenas a primeira correspondência completa e seus grupos de captura relacionados serão retornados. 
Nesse caso, o item devolvido terá propriedades adicionais conforme descrito a seguir. */

// o método .replace() faz uma substituição.

// método .length() mostra o tamanho da string ou array.

// método .slice() determina onde pega a busca e onde termina.

// método .split() dividi minha string e pela quantidade q eu quero.

// método toUpperCase() retorna toda string em maiúsculo.

// método toLowerCase() retorna toda string em minúsculo.