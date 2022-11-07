import './menu-simple.scss'

export default function MenuSimple() {
    return (
        <div className="menu-simple xdhide">
            <div className='me'>
                <img src="./assets/images/me.jpg" width="150" height="150" />
            </div>
            

            <div className='foot'>
                <ul>
                    <li><img id="mail" height="30" src="./assets/icons/gmail.png" /></li>
                    <li><a href="https://www.linkedin.com/in/jcarmena/" target="_blank"><img height="30" src="./assets/icons/linkedin.png" /></a></li>
                    <li><a href="https://www.instagram.com/jacarmena/" target="_blank"><img height="30" src="./assets/icons/instagram.png" /></a></li>
                    <li className='github'><a href="https://github.com/jcdesignweb" target="_blank"><img height="30" src="./assets/icons/github.png" /></a></li>
                </ul>
            </div>
        </div>
    )
}