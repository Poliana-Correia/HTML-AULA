// EVENTOS
// mouse
function print() {
    console.log('print')
}

// teclado
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}

//executando eventos
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', print)

function print() {
    console.log('print')
}

//outra forma de executar
h1.addEventListener('click', function() {
    console.log('outro momento')
})