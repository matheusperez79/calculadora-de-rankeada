let nivel
let resultado = vitoriasEDerrotas(105, 2)

function vitoriasEDerrotas(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

if(resultado < 10){
    nivel = "Ferro"
} else if(resultado > 10 && resultado < 21){
    nivel = "Bronze"
} else if(resultado > 20 && resultado < 51){
    nivel = "Prata"
} else if(resultado > 50 && resultado < 81){
    nivel = "Ouro"
} else if(resultado > 80 && resultado < 91){
    nivel = "Diamante"
} else if(resultado > 90 && resultado < 101){
    nivel = "Lendário"
} else if(resultado >= 101){
    nivel = "Imortal"
}

console.log(`O Herói tem saldo de ${resultado} e está no nível de ${nivel}.`)