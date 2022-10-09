import { onClickCloseButton } from "../../services/behaviour.service";

import './close-button.css'

export default function CloseButton() {
    
    return (
        <button onClick={onClickCloseButton} id="btnClose" className='hide'><i className="icon fa-solid fa-xmark" /></button>
    )
}