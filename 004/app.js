function Dividir() {



let  Valor1 = document.getElementById('n1').value
let  Valor2 = document.getElementById('n2').value
let  Valor3 = document.getElementById('n3').value
let  Valor4 = document.getElementById('n4').value

let total = parseFloat(Valor1) + parseFloat(Valor2) + parseFloat(Valor3) +  parseFloat(Valor4)

document.getElementById('resultado').innerHTML = total / 4
}