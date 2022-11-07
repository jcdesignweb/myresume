import { useEffect, useState } from "react";
import CloseButton from './components/close-button/close-button.component';
import { sharingStageService } from './services/subject-manager.service';
import Pages from './pages/index.page';
import { onClickEnterButton } from './services/behaviour.service';
import Switch from './components/switch/switch.component';
import { getCookie, CookiesTypes } from "./utils/cookies-manager";


import './App.scss'
import MenuSimple from "./pages/simple/menu/menu-simple.page";
import MenuMobile from "./pages/simple/mobile/menu-mobile";
import SimplePage from "./pages/simple/simple.page";



function App() {

    const [isEntered, setIsEntered] = useState(false)

    const subscription$ = sharingStageService.asObservable();
    useEffect(() => {
        subscription$.subscribe((stage: any) => {

            setIsEntered((stage !== "out_site"))

        });
    }, []);


    const btnEnteredClick = () => {

        setIsEntered(true)

        onClickEnterButton(false)

    }

    return (
        <div className="App">

            <MenuMobile />


            <main>
                <div className="pop-animation">

                    <a onClick={btnEnteredClick} id="btnEnter">Ingresar
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>

                </div>
                <div className='top-menu'>
                    <CloseButton />
                </div>
                <section id="me">

                    <div className="presentation">
                        <div className="pres-left">
                            <MenuSimple />
                        </div>
                        <div className="pres-right">

                            <div id="pres-right-container">
                                <SimplePage />
                            </div>

                        </div>

                        {isEntered &&
                            <Pages />
                        }

                    </div>
                </section>
                
            </main>
        </div>
    )
}

export default App
