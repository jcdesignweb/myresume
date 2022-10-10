import { ContentWrapper } from "../../components/content/content.component";
import './contact.css'
import { useEffect } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

export default function ContactPage() {

    useEffect(() => {
        tippy('#mail', {
            content: 'juan14nob@gmail.com',
        });
    }, [])


    return (
        <div id="contact" className="page hide">
            <ContentWrapper>

                <div className="row to-me center">
                    <br /><br /><br />
                    <h1>Puedes encontrarme en:</h1>

                    <br /><br /><br /><br />
                    <div className="blocks">
                        <div className="left ">
                            <div className="social-networks row center">
                                <ul>
                                    <li><img id="mail" height="30" src="./assets/icons/gmail.png" /></li>
                                    <li><a href="https://www.linkedin.com/in/jcarmena/" target="_blank"><img height="30" src="./assets/icons/linkedin.png" /></a></li>
                                    <li><a href="https://www.instagram.com/jacarmena/" target="_blank"><img height="30" src="./assets/icons/instagram.png" /></a></li>
                                    <li><a href="https://github.com/jcdesignweb" target="_blank"><img height="30" src="./assets/icons/github.png" /></a></li>
                                </ul>

                            </div>
                        </div>
                        <div className="right">
                            <h2>Juan Andrés Carmena</h2><br />
                            <h3>Rosario · Santa Fe · Argentina</h3>
                        </div>

                    </div>

                </div>

            </ContentWrapper>
        </div>
    )
}