// exercicio de repetição 
// Enunciado - percorrer uma lista de nomes, contendo os nomes: Eduardo, Maria, Fernando, João e Francisco
// Colocar as informações:
//Número da execução, começando em 1
//Nome que está sendo executado
//Separadores
//Execução: 1
//Nome: Eduardo
//------------------
//solução 1 - meu
const nomes = ['','Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']

// for (let index = 1; index < nomes.length; index++) {
//     console.log('Indice:' + index)
//     console.log(nomes[index])
// }

//solução do vídeo 
nomes.forEach((nome,index) => {
    console.log('Execução: ' + (index+1)) // ou console.log(Execução, index+1)
    console.log('Nomes: ' + nome)
})