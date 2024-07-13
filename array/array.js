const paises = ['Brasil', 'Argentina', 'Alemanha'] //lista de dados
// indice 0 - Brasil, indice 1 - Argentina, indice 2 - Alemanha
console.log('Acessando os países: ' + paises[0], paises[2])// imprimindo o indice 0 e 2 do vetor paises 
console.log(paises.length) //descobrindo o tamanho do vetor

//Operações com o vetor
// - adição de item no array
paises.push('Suiça') //será adicionado na ultima posição do vetor
console.log(paises)
paises.pop() //remove o ultimo elemento do array
console.log(paises)
paises.unshift('França') //adiciona na primeira posição do array - indice 0
console.log(paises)