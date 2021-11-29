// NAVEGANDO PELOS ELEMENTOS 
// parentNode  parentElement
const element = document.querySelector('h1')

console.log(element.parentNode)
console.log(element.parentElement)



// (pegando elementos filhos)
//childNodes  children
const el = document.querySelector('body')
console.log(el.childNodes)
console.log(el.children)

// firstChild   firstElementChild
console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild    lastElementChild
console.log(el.lastChild)
console.log(el.lastElementChild)



// (buscando irmãos)
const elemento = document.querySelector('body script')
// nextSibling   nextElementSibling
console.log(elemento.nextSibling)
console.log(elemento.nextElementSibling)

// previousSibling   previousElementSibling
console.log(elemento.previousSibling)
console.log(elemento.previousElementSibling)