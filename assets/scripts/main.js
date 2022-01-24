// Show Hamburger Menu
let hamburgerMenu = document.querySelector('.hamburger_menu');
let navigationModal = document.querySelector('.navigation_modal');
if(hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        navigationModal.style.top = 0;
    })
}

// show soon modal
let allSoon = document.querySelectorAll('.soon');
let soonModal = document.querySelector('#soon_modal');
console.log(allSoon)

if(allSoon) {
    allSoon.forEach(soon => {
        soon.addEventListener('click', () => {
            soonModal.style.top = 0;
            modalCloseIcon.style.display = 'block';
        })
    });
}

// Close modal
let modalCloseIcon = document.querySelector('.fa-times');

if(modalCloseIcon) {
    modalCloseIcon.addEventListener('click', () => {
        alert('Close modal')
    })
}

