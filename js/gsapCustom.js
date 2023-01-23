window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const mm = gsap.matchMedia();

// АНИМАЦИЯ НА ГЛАВНОМ ЭКРАНЕ=========================================

gsap.fromTo('.main__title',
    {
        y: 100,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
    }
)
gsap.fromTo('.main__sub-title',
    {
        y: 100,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5
    }
)
gsap.fromTo('.main__btn',
    {
        y: 100,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1
    }
)

mm.add('(min-width: 900px)', () => {
    gsap.to(['.main__title', '.main__sub-title', '.main__btn'], {

        scrollTrigger: {
            trigger: '.main',
            // markers: true,
            start: "15% top",
            end: "80% center",
            scrub: 2,
        },

        x: 200,
        top: 200,
    })
}) //конец кода брекпоинта
///////////////////////////////////////////////////////////////////

// СЕКЦИЯ "ПРЕИМУЩЕСТВА ДРЕВЕСИНЫ"===========================================
mm.add('(min-width: 900px)', () => {

    // Заголовок
    gsap.fromTo('.woodAdvant__title',
        {
            opacity: 0,
            y: 150,
        },
        {
            scrollTrigger: {
                trigger: '.woodAdvant',
                // markers: true,
                start: "-20% center",
                end: '+=300',
            },
            opacity: 1,
            y: 0,
            duration: 1,
        }

    )

    // Иконки
    gsap.fromTo('.woodAdvant__advant-item',
        {
            opacity: 0,
            y: 100,
        },
        {
            scrollTrigger: {
                trigger: '.woodAdvant',
                // markers: true,
                start: "-22% center",
                end: '+=300',
            },
            opacity: 1,
            y: 0,
            duration: .4,
            stagger: .2,
        }
    )

    // Текст=======================================
    gsap.fromTo(['.woodAdvant__text-title', '.woodAdvant__text p'],
    {
        opacity: 0,
        y: 100,
    },
    {
        scrollTrigger: {
            trigger: '.woodAdvant',
            // markers: true,
            start: "35% center",
            end: '+=300',
        },
        opacity: 1,
        y: 0,
        duration: .5,
        stagger: .2,
    }
)

// Лес
gsap.fromTo('.woodAdvant__img-forest',
    {
        opacity: 0,
        y: 100,
    },
    {
        scrollTrigger: {
            trigger: '.woodAdvant',
            // markers: true,
            start: "35% center",
            end: '+=300',
        },
        opacity: 1,
        y: 0,
        duration: .7,
        delay: .7
    }
)
//  Брус
gsap.fromTo('.woodAdvant__img-brus',
    {
        scale: 0,
        x: 200,
    },
    {
        scrollTrigger: {
            trigger: '.woodAdvant',
            // markers: true,
            start: "35% center",
            end: '+=300',
        },
        scale: 1,
        duration: 1,
        delay: 1,
        x: 0
    }
)

}) //конец кода брекпоинта
///////////////////////////////////////////////////////////////////



}); //конец DOMContentLoaded