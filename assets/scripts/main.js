// MODAL
let modal = document.querySelectorAll('.modal');

// Show Hamburger Menu
let hamburgerMenu = document.querySelector('.hamburger_menu');
let navigationModal = document.querySelector('.navigation_modal');
if(hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        navigationModal.style.top = 0;
        showCloseIcon();
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
            showCloseIcon();
        })
    });
}

// Hide modal
function hideModal() {
    modal.forEach(element => {
        element.style.top = '-100vh'
    });
}

// Close icon

// Close modal
let modalCloseIcon = document.querySelector('.fa-times');

// Hide close icon
function hideCloseIcon() {
    modalCloseIcon.style.display = 'none';
}

// Show close icon
function showCloseIcon() {
    modalCloseIcon.style.display = 'block';
}

if(modalCloseIcon) {
    modalCloseIcon.addEventListener('click', () => {
        hideModal();
        hideCloseIcon();
    })
}

