import { markAsSelected } from "../components/menu/menu.component";
import { PagesType } from "../models/pages-type";


const animateCSS = (element: any, animation: any, actionEndedClass: string, prefix = 'animate__') => {
    // We create a Promise and return it
    new Promise((resolve, reject) => {

        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);


        node.classList.remove(...node.classList);
        //node.classList.remove('show')
        //node.classList.remove('hide')

        if (actionEndedClass !== 'hide') {
            node.classList.remove('show')

        } else {
            node.classList.remove('hide')
        }

        node.classList.add(actionEndedClass)

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event: any) {
            event.stopPropagation();
            //node.classList.remove(`${prefix}animated`, animationName);

            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
}

const closeBtn = '#btnClose'
const enterBtn = '#btnEnter'
const menu = '#menu'
const pages = '#pages'



// exit
export const onClickCloseButton = () => {
    animateCSS(closeBtn, 'bounceOutUp', 'hide')

    animateCSS(menu, 'bounceOutLeft', 'hide')
    //animateCSS(pages, 'slideOutDown', 'hide')

    const animationName = `animate__zoomOutUp`;
    const node = document.querySelector(pages);

    //node.classList.remove(...node.classList);

    //node.classList.add(actionEndedClass)
    node?.classList.add(`animate__animated`, animationName);

    setTimeout(() => {
        animateCSS(enterBtn, 'zoomIn', 'show')
    }, 800)

}

export const onClickEnterButton = () => {
    animateCSS(enterBtn, 'zoomOut', 'hide')
    animateCSS(menu, 'bounceInLeft', 'show')
    animateCSS(closeBtn, 'bounceInDown', 'show')
    animateCSS(pages, 'zoomInUp', 'show')


    selectPageHome()

}

const selectPageHome = () => {
    markAsSelected(PagesType.pageHome)

    const pages = document.querySelectorAll('#pages .page');
    for (const page of pages) {
        page?.classList.remove('show')
        page?.classList.add('hide')

    }

    const homePage = document.querySelector('#pages #intro');
    homePage?.classList.remove('hide')
}


export const pageTransition = (old: PagesType, next: PagesType) => {

    // hide page
    let animationName = `animate__backOutDown`;
    const node = document.querySelector(pages);

    node?.classList.remove(...node.classList);
    node?.classList.add(`animate__animated`, animationName);

    setTimeout(() => {
        // hide children page and show the selected
        const oldEl = document.querySelector(`#${old}`)
        const newEl = document.querySelector(`#${next}`)

        oldEl?.classList.remove('show');
        oldEl?.classList.add('hide');

        newEl?.classList.remove('hide');
        newEl?.classList.add('show');

        
        setTimeout(() => {
            // show again
            animationName = `animate__backInDown`;
            node?.classList.remove(...node.classList);
            node?.classList.add(`animate__animated`, animationName);

        }, 100)

    }, 600)






}