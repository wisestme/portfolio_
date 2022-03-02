// MODAL
let modal = document.querySelectorAll('.modal');
const overlay = document.getElementById('overlay');

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
            toggleNav();

            hamburgerMenu.classList.toggle('change');
        

         
    })
}

let soon = document.querySelectorAll('.soon');
let soonModal = document.querySelector('#soon_modal'); 

soon.forEach(element => {
    element.addEventListener('click', toggleSoonModal);
});

function toggleSoonModal () {
    if(hamburgerMenu.classList.contains('change')) {
        soonModal.classList.remove('modal_show');

        } else {
            soonModal.classList.add('modal_show');
        hamburgerMenu.classList.add('change');

        }
     toggleNav();
}

const navItems = document.querySelectorAll('[class^="slide_"]');

// Control navigation animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide_${direction1}_${i + 1}`, `slide_${direction2}_${i + 1}`);
    })
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    //menuBars.classList.toggle('change');

    // show/hide menu
    overlay.classList.toggle('overlay_active');
    if(overlay.classList.contains('overlay_active')) {
        // animate-in overlay
        overlay.classList.replace('overlay_slide_left', 'overlay_slide_right');

        // animate-in nav items
        navAnimation('out', 'in');
    } else {
        // animate-out overlay
        overlay.classList.replace('overlay_slide_right', 'overlay_slide_left');
        
        // animate-out nav items
        navAnimation('in', 'out')
    }
}

// Event listeners


navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        toggleNav();
        overlay.classList.remove('modal_show');
        navigationModal.classList.remove('modal_show');
        hamburgerMenu.classList.remove('change');
        overlay.classList.remove('overlay_active');

    });
})