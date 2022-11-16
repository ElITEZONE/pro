document.addEventListener('DOMContentLoaded', () => {

    const menuToggler =document.querySelector('.menu-toggler')
    const headerMenu = document.querySelector('.header-menu')

    menuToggler.addEventListener('click', () => {
        menuToggler.classList.toggle('open')
        headerMenu.classList.toggle('open')
        document.body.classList.toggle('no-scroll')
    })





    const introImg = document.querySelector('.intro-img')
    const introBody = document.querySelector('.intro-body')
    const introButtons = document.querySelector('.intro-buttons')
    introBody.classList.add('animation')
    introImg.classList.add('animation')
    introButtons.classList.add('animation')




const sliderSwitcherLeft = document.querySelector('.slider-switcher-left')
const sliderSwitcherRight = document.querySelector('.slider-switcher-right')
const sliderItem = document.querySelectorAll('.slider-item')
let countSliderItem = 0;
sliderSwitcherRight.addEventListener('click', () => {
    countSliderItem++
    if(countSliderItem >= sliderItem.length) {
        countSliderItem = sliderItem.length - 1
        sliderSwitcherRight.classList.remove('arrow-active')
        sliderSwitcherLeft.classList.add('arrow-active')
    } 

    if(countSliderItem > 0 && countSliderItem < sliderItem.length) {
        sliderSwitcherLeft.classList.add('arrow-active')
    }
    sliderItem.forEach((item, i) => {
        item.classList.remove('active');
        sliderItem[countSliderItem].classList.add('active')
    })
})

sliderSwitcherLeft.addEventListener('click', () => {
    countSliderItem--
    if(countSliderItem <= 0) {
        countSliderItem = 0
        sliderSwitcherLeft.classList.remove('arrow-active')
        sliderSwitcherRight.classList.add('arrow-active')
    } 
    if(countSliderItem < sliderItem.length && countSliderItem > 0) {
        sliderSwitcherRight.classList.add('arrow-active')
    }
    sliderItem.forEach((item, i) => {
        item.classList.remove('active');
        sliderItem[countSliderItem].classList.add('active')
    })
})

}) 
    




const popupWrapper = document.querySelector('.popup-wrapper')
const popupOpen = document.querySelector('.popup-open')
const popupClouse = document.querySelector('.popup-clouse')


function popupShow() {
    popupWrapper.classList.add('show')
    document.body.style.overflow = "hidden"
}

function popupHide() {
    popupWrapper.classList.remove('show')
    document.body.style.overflow = "auto"
}

popupOpen.addEventListener('click', popupShow)

popupClouse.addEventListener('click', popupHide)

popupWrapper.addEventListener('click', (event) => {
    const target = event.target
    if(target == popupWrapper) {
        popupHide()
    }
})