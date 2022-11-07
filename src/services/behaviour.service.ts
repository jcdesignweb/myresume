import { markAsSelected } from '../components/menu/menu.component';
import { sharingStageService } from '../services/subject-manager.service';
import { PagesType } from '../models/pages-type';

const animateCSS = (element: any, animation: any, actionEndedClass: string, prefix = 'animate__') => {
    // We create a Promise and return it
    new Promise((resolve) => {
        const animationName = `${prefix}${animation}`;

        console.log("Element", element)
        const node = document.querySelector(element);

        node.classList.remove(...node.classList);
        // node.classList.remove('show')
        // node.classList.remove('hide')

        if (actionEndedClass !== 'hide') {
            node.classList.remove('show');
        } else {
            node.classList.remove('hide');
        }

        node.classList.add(actionEndedClass);
        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event: any) {
            event.stopPropagation();
            // node.classList.remove(`${prefix}animated`, animationName);

            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
};

const closeBtn = '#btnClose';
const enterBtn = '#btnEnter';
const menu = '#menu';
const pages = '#pages';

// exit
export const onClickCloseButton = () => {
    animateCSS(closeBtn, 'bounceOutUp', 'hide');

    animateCSS(menu, 'bounceOutLeft', 'hide');
    // animateCSS(pages, 'slideOutDown', 'hide')

    const animationName = 'animate__zoomOutUp';
    const node = document.querySelector(pages);
    
    node?.classList.add('animate__animated', animationName);


    const presLeftElement = document.querySelector(".pres-left");
    presLeftElement?.classList.remove('small')


    const meSide: any = document.getElementById('me')
        meSide.classList.remove('small')

    setTimeout(() => {
        animateCSS(enterBtn, 'zoomIn', 'show');

        sharingStageService.next("out_site");
    }, 400);
};

export const onClickEnterButton = (isAnimated: boolean) => {
    animateCSS(enterBtn, 'zoomOut', 'hide');
    animateCSS(closeBtn, 'bounceInDown', 'show');
    const rcontainer: any = document.getElementById('pres-right-container')

    if (isAnimated) {
        animateCSS(menu, 'bounceInLeft', 'show');
        animateCSS(pages, 'zoomInUp', 'show');
        
        rcontainer.classList.add('dhide')

        selectPageHome();
    } else {
        rcontainer.classList.remove('dhide')

        const leftSide: any = document.getElementsByClassName('pres-left')
            console.log(leftSide)
            leftSide[0].classList.add('small')


        const menSimple: any = document.getElementsByClassName('menu-simple')
        menSimple[0].classList.remove('dhide')
        
        const meSide: any = document.getElementById('me')
        meSide.classList.add('small')


        setTimeout(() => {
            
            
        }, 1200);
        
        
    }
    

    sharingStageService.next("in_site");
};

const selectPageHome = () => {
    markAsSelected(PagesType.pageHome);

    const pages = document.querySelectorAll('#pages .page');
    for (const page of pages) {
        page?.classList.remove('show');
        page?.classList.add('hide');
    }

    const homePage = document.querySelector('#pages #intro');
    homePage?.classList.remove('hide');
};

export const pageTransition = (old: PagesType, next: PagesType) => {
    // hide page
    let animationName = 'animate__backOutDown';
    const node = document.querySelector(pages);

    node?.classList.remove(...node.classList);
    node?.classList.add('animate__animated', animationName);

    setTimeout(() => {
        // hide children page and show the selected
        const oldEl = document.querySelector(`#${old}`);
        const newEl = document.querySelector(`#${next}`);

        oldEl?.classList.remove('show');
        oldEl?.classList.add('hide');

        newEl?.classList.remove('hide');
        newEl?.classList.add('show');

        setTimeout(() => {
            // show again
            animationName = 'animate__backInDown';
            node?.classList.remove(...node.classList);
            node?.classList.add('animate__animated', animationName);
        }, 100);
    }, 600);
};
