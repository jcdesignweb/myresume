import { sharingInformationService } from '../services/subject-manager.service';
import { useEffect } from 'react';
import IntroPage from './intro/intro.page';
import ContactPage from './contact/contact.page';

import { PagesType } from '../models/pages-type';

import './index.css'
import { pageTransition } from '../services/behaviour.service';
import ExperiencePage from './experience/experience.page';
import StudiesPage from './studies/studies.page';




let selectedPage: PagesType = PagesType.pageHome


export default function Pages() {

    const subscription$ = sharingInformationService.getSubject();

    useEffect(() => {
        subscription$.subscribe((selectedItemPage: any) => {
            
            pageTransition(selectedPage, selectedItemPage)
            
            selectedPage = selectedItemPage
            console.log("getting a new state", selectedPage)
        });
    }, []);

    return (
        <div id="pages" className='hide'>
            <IntroPage />
            <ExperiencePage />
            <StudiesPage />
            <ContactPage />
        </div>
    )
}