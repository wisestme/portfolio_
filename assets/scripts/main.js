// MODAL
let modal = document.querySelectorAll('.modal');

// Show Hamburger Menu
let hamburgerMenu = document.querySelector('.hamburger_menu');
let navigationModal = document.querySelector('.navigation_modal');
if(hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        // navigationModal.style.top = 0;
        if(hamburgerMenu.classList.contains('change')) {
            modal.forEach(element => {
                element.classList.remove('modal_show');
            });
            } else {
                navigationModal.classList.add('modal_show');
            }
            hamburgerMenu.classList.toggle('change');
        

         
    })
}

let soon = document.querySelectorAll('.soon');
let soonModal = document.querySelector('#soon_modal'); 

soon.forEach(element => {
    element.addEventListener('click', showSoonModal);
});

function showSoonModal () {
    if(hamburgerMenu.classList.contains('change')) {
        soonModal.classList.remove('modal_show');
        } else {
            soonModal.classList.add('modal_show');
        }
        hamburgerMenu.classList.add('change');
     
}
