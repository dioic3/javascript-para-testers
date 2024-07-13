// exercicio 2 - estrutura de decisão
const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

cidades.forEach((cidade,index) => {
    index += 1
    console.log(cidade)
    console.log(index)
    if(cidade == 'Florianópolis'){
        console.log("Encontrado")
    }
    else {
        console.log("Não encontrado")
    }
})