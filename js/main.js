const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu =  document.querySelector('.mobile-menu')

let showMenu = false;
mobileMenuButton.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    event.preventDefault();
    if(!showMenu) {
        mobileMenu.classList.remove('hide');
        mobileMenu.classList.add('show');
        console.log("here")
        showMenu = true;
    }
    else {
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('hide');
        console.log("NO")
        showMenu = false;
    }
    
}
