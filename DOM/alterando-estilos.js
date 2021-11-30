// ALTERANDO ESTILOS
//style
const element = document.querySelector('body')

element.style.backgroundColor = '#f9f3'  //atribuindo css (código da cor)
console.log(element.style.backgroundColor) //pegando valores


//classList
const corpo = document.querySelector('body')

corpo.classList.add('active') // adicionando classe
console.log(corpo.classList)

corpo.classList.remove('active') // removendo classe
corpo.classList.toggle('active') // toggle funciona como um alternador se tem ele remove se não tem ele adiciona.


