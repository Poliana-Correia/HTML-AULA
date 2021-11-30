// CRIANDO E ADICIONANDO ELEMENTOS
// createElement
const div = document.createElement('div') // criei div
div.innerText = "Olá Devs!"   // adicionando elemento a div criada

// append prepend
const body =  document.querySelector('body')
body.append(div)  // colocando na pagina a div depois de algum filho
//body.prepend(div)  // colocando a div antes 