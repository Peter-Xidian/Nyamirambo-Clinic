/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('mn__header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== MENU SHOW Y HIDDEN ====================*/ 
const navMenu = document.getElementById('rnav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

/*-=- SHOW -=-*/
toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

/*-=- HIDDEN -=-*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/* -=-=-=- ACTIVE AND REMOVE MENU -=-=-=-*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // ACTIVE LINK
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    // REMOVE MENU MOBILE
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))