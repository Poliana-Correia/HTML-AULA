// MANIPULANDO CONTEUDOS

// textContent
// const element = document.querySelector('h1')
// element.textContent += " Olá Devs!" // pegando o conteudo da tag h1 com a função .querySelector e adicinando(concatenando) uma string.
// console.log(element.textContent)


// innerText
// const element = document.querySelector('h1')
// element.innerText= " Olá Devs!"


// innerHTML
// const element = document.querySelector('h1')
// element.innerHTML= " Olá Devs! <big>!</big> <small>!</small>"


// value
// const element = document.querySelector('input')
// console.log(element.value) //value serve tanto para pegar valor quanto para atribuir valor.
// element.value = "Valor que eu quiser colocar"


// atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header') // adicionei atributos
const headerID = document.querySelector('#header') // pesquisando pelo id criado (usar #)

console.log(headerID)
console.log(headerID.getAttribute('id')) //pegar o atributo id

header.removeAttribute('id') //removendo atributos



