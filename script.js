
let origem = document.getElementById('origem')
let destino = document.getElementById('destino')
let tempo = document.getElementById('tempo')
let plano = document.getElementById('plano')
let comFaleMais = document.getElementById('comFaleMais')
let semFaleMais = document.getElementById('semFaleMais')
const button = document.getElementById('button')

let taxOne = 1.90 // 011 - 016
let taxTwo = 2.90 // 016 - 011
let taxTree = 1.70 // 011 - 017
let taxFour = 2.70 // 017 - 011
let taxFive = 0.90 // 011 - 018
let taxSix = 1.90 // 018 - 011

function calcular () {

    console.log(origem.value + destino.value + tempo.value)
    if (origem.value = 11 & destino.value <= 16 & tempo.value <= 31) {
            comFaleMais.innerHTML = "R$ 0.00"
        }
     else {
         console.log('não rolou')
    }
}
