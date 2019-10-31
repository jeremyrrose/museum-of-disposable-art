let burgerMenu = document.querySelector('.menuframe');
// burgerMenu.style.width = "0px";
let mainMenu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');
let mainBurgerIcon = document.querySelector('.mainBurger');
let sideBurgerIcon = document.querySelector('.burgerButton');
let menuBurgerDiv = document.querySelector('.menuBurger');
let arrowIcon = document.querySelector('.arrow');
let menuItems = document.querySelector('.menuframe').querySelectorAll('a');
let logo = document.querySelector('.logo');
let mobileBurger = logo.querySelector('.mobileBurger');

const opacitizer = (arr, initTimeout = 0, inc = 50) => {
    if (burgerMenu.classList[1]) {
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => arr[i].style.opacity = 1, initTimeout);
            initTimeout += inc;
        }
    }
}

const menuToggle = () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        if (!burgerMenu.classList[1]) {
            document.body.classList.add('noScroll');
            logo.classList.add('sticky');
            burgerMenu.addEventListener('transitionend',() => opacitizer(menuItems, 0, 40));
            burgerMenu.classList.add('open');
            mainMenu.classList.add('open');
        } else {            
            burgerMenu.classList.remove('open');
            mainMenu.classList.remove('open');
            document.body.classList.remove('noScroll');
            if (window.scrollY < stickyPoint) {
                window.scrollTo(0, stickyPoint);
            }
            menuItems.forEach(item => item.style.opacity = 0);
        }
    } else {
        if (!burgerMenu.classList[1]) {
            hamburger.style.opacity = 0;
            setTimeout(() => hamburger.style.width = "0px", 600);
            // mainMenu.style.gridTemplateColumns = "0px repeat(4, 1fr)";
            sideBurgerIcon.style.opacity = 1;
            burgerMenu.addEventListener('transitionend',() => opacitizer(menuItems, 0, 40));
            burgerMenu.classList.add('open');
        } else {
            sideBurgerIcon.style.opacity = 0;
            burgerMenu.classList.remove('open');
            // mainMenu.style.gridTemplateColumns = "50px repeat(4, 1fr)";
            hamburger.style.width = "80px";
            hamburger.style.opacity = 1;
            menuItems.forEach(item => item.style.opacity = 0);
            // timeouts.forEach(item => clearTimeout(item));
            // menuItems.forEach(item => {
            //     console.log(item, item.style.opacity); item.style.opacity = 0;
            // });
        }
    }
}

menuBurgerDiv.addEventListener('click', menuToggle);
menuBurgerDiv.addEventListener('mouseover',function () {
    sideBurgerIcon.setAttribute('src','images/hamburgerHover.svg');
    arrowIcon.setAttribute('src','images/arrowHover.svg');
});
menuBurgerDiv.addEventListener('mouseout',() => {
    sideBurgerIcon.setAttribute('src','images/hamburger.svg');
    arrowIcon.setAttribute('src','images/arrow.svg');
});

hamburger.addEventListener('click',menuToggle);
hamburger.addEventListener('mouseover',() => mainBurgerIcon.setAttribute('src','images/hamburgerHover.svg'));
hamburger.addEventListener('mouseout',() => mainBurgerIcon.setAttribute('src','images/hamburger.svg'));

mobileBurger.addEventListener('click',menuToggle);
mobileBurger.addEventListener('mouseover',() => mobileBurger.setAttribute('src','images/hamburgerHover.svg'));
mobileBurger.addEventListener('mouseout',() => mobileBurger.setAttribute('src','images/hamburger.svg'));

let stickyPoint = logo.offsetTop;
const stickinator = () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        if (window.pageYOffset >= stickyPoint) {
            logo.classList.add('sticky');
        } else {
            logo.classList.remove('sticky');
        }
    }
}

window.onscroll = stickinator;
