//Uma função precisa ser chamada e pode receber parametros
// Pode retornar dados ou não

// function gerarNome(){
//     const nome = "Eduardo"
//     const sobrenome = "Finotti"
//     const idade = 30

//     console.log("Nome:", nome,"", sobrenome)
//     console.log('Idade: ', idade)
// }
// gerarNome()

// passar parametros para uma função

// function gerarNome(nome,sobrenome,idade){
//     console.log("Nome:", nome, sobrenome)
//     console.log('Idade:', idade)
// }
// gerarNome('Joyce','da Costa Dias', 22)
// gerarNome('Pedro', 'Bressan', 23)

//função que retorna dados
function gerarNome(nome,sobrenome){
    return nome + sobrenome;
}
console.log(gerarNome('Joyce', 'Dias'))
const nome = gerarNome('Dioice', '.com')
console.log(nome)