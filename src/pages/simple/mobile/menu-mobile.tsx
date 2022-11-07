import { useState } from "react";

import { slide as MobileMenu, State } from 'react-burger-menu'
import './menu-mobile.scss'

export default function MenuMobile() {

    const [isOpen, setIsOpen] = useState(false)
    const handleOnOpen = (e: any) => {
        console.log("seeeee",e)

        return true
    }
    var isMenuOpen = function(state: any) {
        console.log("is menu open", state)
        return state.isOpen;
      };

    return (
        <div className="mobile-menu">
            <MobileMenu customBurgerIcon={<img src="../../public/assets/icons/menu.png" width="40" />} onStateChange={ isMenuOpen } >
                <div>
                    <h1>aaa</h1>
                    <h1>bbb</h1>
                </div>
            </MobileMenu>
        </div>
    )
}