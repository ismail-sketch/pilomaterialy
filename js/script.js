const burger = document.querySelector('.burger');
const burgerSpan = document.querySelectorAll('.burger span');
const menuList = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burgerSpan.forEach(item => {
        item.classList.toggle('active');
    })
    menuList.classList.toggle('active');
    body.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')) {
        burgerSpan.forEach(item => {
            item.classList.remove('active');
        })
        menuList.classList.remove('active');
        body.classList.remove('active');
    }
})

// ИЗМЕНЕНИЕ ЦВЕТА ХЕДЕРА=============================================
const header =  document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 30) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})

// ПЕРЕМЕЩЕНИЕ ЗАГОЛОВКА "У НАС В НАЛИЧИИ ПРОДУКЦИЯ ИЗ ХВОИ И ЛИСТВЕННИЦЫ"
const woodAdvantTextTitle =  document.querySelector('.woodAdvant__text-title');
const woodAdvantTextContWrp =  document.querySelector('.woodAdvant__text-cont-wrp');
const woodAdvantText = document.querySelector('.woodAdvant__text');

function moveTitle() {
    if(window.innerWidth < 940) {
        woodAdvantTextContWrp.insertAdjacentElement('afterbegin', woodAdvantTextTitle)
    } else {
        woodAdvantText.insertAdjacentElement('afterbegin', woodAdvantTextTitle);
    }
}
moveTitle();

window.addEventListener('scroll', moveTitle);




