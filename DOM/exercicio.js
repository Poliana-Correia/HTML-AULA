// Dando funcinalidade ao botão

const buttonOpenModal = document.getElementById
('openModal')

const modalWrapper = document.querySelector
('.modal-wrapper')

buttonOpenModal.onclick = function() {
    console.log('abrir')
    modalWrapper
        .classList
        .remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})

const buttonCloseModal = document.getElementById('close')

buttonCloseModal.onclick = function() {
    modalWrapper.classList.add('invisible')
}

