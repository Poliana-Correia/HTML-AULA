// EXEMPLOS DE .GETELEMENT(S):

// getElementById   (element)
//const element = document.getElementById('meu-blog');
//console.log(element)

//getElementByClassName   (HTMLcollection)
//const element = document.getElementsByClassName('one');
//console.log(element)

//getElementByTagName     (HTMLcollection)
//const element = document.getElementsByTagName('head');
//console.log(element)




// EXEMPLO DE .QUERYSELECTOR:
//querySelector     (element)
//const element = document.querySelector('[src]');
//console.log(element)

//querySelectorAll  (Nodelist)
const elements = document.querySelectorAll('.one');

elements.forEach(el => console.log(el))

// for (let index = 0; index < elements.length; index++) {
//     console.log(elements[index])    
// }