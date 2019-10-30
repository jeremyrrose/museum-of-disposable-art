let burgerMenu = document.querySelector('.menuframe');
burgerMenu.style.width = "0px";
let mainMenu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');
let mainBurgerIcon = document.querySelector('.mainBurger');
let sideBurgerIcon = document.querySelector('.burgerButton');
let menuBurgerDiv = document.querySelector('.menuBurger');
let arrowIcon = document.querySelector('.arrow');
let menuItems = document.querySelector('.menuframe').querySelectorAll('a');

const opacitizer = (arr, initTimeout = 0, inc = 50) => {
    if (burgerMenu.style.width != "0px") {
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => arr[i].style.opacity = 1, initTimeout);
            initTimeout += inc;
        }
    }
}

const menuToggle = () => {
    if (burgerMenu.style.width === "0px") {
        hamburger.style.opacity = 0;
        hamburger.style.width = "0px";
        // mainMenu.style.gridTemplateColumns = "0px repeat(4, 1fr)";
        sideBurgerIcon.style.opacity = 1;
        burgerMenu.addEventListener('transitionend',() => opacitizer(menuItems, 0, 40));
        burgerMenu.style.width = "280px";
    } else {
        sideBurgerIcon.style.opacity = 0;
        burgerMenu.style.width = "0px";
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

