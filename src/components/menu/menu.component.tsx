import { PagesType } from '../../models/pages-type';
import { sharingInformationService } from '../../services/subject-manager.service';
import './menu.css'


export const markAsSelected = (selectedItemPage: PagesType) => {
    const links: any = document.querySelectorAll('#menu ul li');
    console.log("Links", links)
    for (const link of links) {
        const itemNameEl = link.childNodes[1]
        link.classList.remove('selected')

        
        itemNameEl.classList.remove('show')
    }

    const selectedElement: HTMLElement | null = document.querySelector(`ul li.${selectedItemPage}`) as HTMLElement
    
    selectedElement?.classList.add('selected')

    const itemName = selectedElement?.childNodes[1] as HTMLElement
    itemName?.classList.add('show')
}

const onClickMenu = (selectedItemPage: PagesType) => {
    markAsSelected(selectedItemPage)
    sharingInformationService.setSubject(selectedItemPage)

}

export default function Menu() {


    return (
        <div id="menu" className='hide'>
            <ul>
                <li className={PagesType.pageHome} onClick={() => onClickMenu(PagesType.pageHome)}>
                    <a href='#'  ><i className="icon fa-solid fa-house"></i></a>
                    <span className='item-name'>INICIO</span>
                </li>
                <li className={PagesType.pageStudies} onClick={() => onClickMenu(PagesType.pageStudies)}>
                    <a href='#' ><i className="icon fa-solid fa-graduation-cap"></i></a>
                    <span className='item-name'>ESTUDIOS</span>
                </li>
                <li className={PagesType.pageExperience} onClick={() => onClickMenu(PagesType.pageExperience)}>
                    <a href='#' ><i className="icon fa-solid fa-computer"></i></a>
                    <span className='item-name'>EXPERIENCIA</span>
                </li>
                <li className={PagesType.pageContact} onClick={() => onClickMenu(PagesType.pageContact)}>
                    <a href='#' ><i className="fa-solid fa-envelope"></i></a>
                    <span className='item-name'>CONTACTO</span>
                </li>
            </ul>
        </div>
    )
}