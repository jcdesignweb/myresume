import './switch.css'

export default function Switch(props: any) {

    const onChangeSwitch = (event: any) => {
        console.log(props)
        props.animateCallback(event.target.checked) 
    }

    return (
        <label className="switch">
            <input type="checkbox" id="inpTheme" defaultChecked={props.isAnimated} onChange={onChangeSwitch} />
            <span className="slider round"></span>
        </label>
    )
}