import { useEffect } from 'react';
import Menu from '../components/menu/menu.component';
import { PagesType } from '../models/pages-type';
import { sharingInformationService } from '../services/subject-manager.service';
import { sharingStageService } from '../services/subject-manager.service';
import { pageTransition } from '../services/behaviour.service';
import StudiesPage from './studies/studies.page';
import './index.css'


let selectedPage: PagesType = PagesType.pageHome


export default function Pages(props: any) {

    const subscription$ = sharingInformationService.getSubject();
    const subscriptionStage$ = sharingStageService.asObservable();

    console.log("props", props)

    useEffect(() => {
        subscription$.subscribe((selectedItemPage: any) => {

            pageTransition(selectedPage, selectedItemPage)

            selectedPage = selectedItemPage
            console.log("getting a new state", selectedPage)
        });

    }, []);
    //
    return (
        <>
            {(props.isAnimate) &&
                <div className='animated'>

                    {(props.isAnimate) &&
                        <Menu />
                    }

                    <div id='pages' className='xhide'>


                    </div>
                </div>
            }
        </>
    )
}