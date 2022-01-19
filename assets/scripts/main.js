let allSoon = document.querySelectorAll('.soon');
let soonModal = document.querySelector('#soon_modal');
console.log(allSoon)

if(allSoon) {
    allSoon.forEach(soon => {
        soon.addEventListener('click', () => {
            soonModal.style.top = 0;
        })
    });
}