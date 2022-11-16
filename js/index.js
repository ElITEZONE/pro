document.addEventListener('DOMContentLoaded', () => {

    const menuToggler =document.querySelector('.menu-toggler')
    const headerMenu = document.querySelector('.header-menu')

    menuToggler.addEventListener('click', () => {
        menuToggler.classList.toggle('open')
        headerMenu.classList.toggle('open')
        document.body.classList.toggle('no-scroll')
    })
})