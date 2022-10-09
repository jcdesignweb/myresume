import { ContentWrapper } from "../../components/content/content.component";
import './contact.css'

export default function ContactPage() {

    return (
        <div id="contact" className="page hide">
            <ContentWrapper>

                <form>

                    <div className="field">
                        <span>Nombre y Apellido</span><br />
                        <input type="text" name="name" /><br />
                    </div>

                    <div className="field">
                        <span>Email</span><br />
                        <input type="email" name="email" />
                    </div>

                    <div className="field">
                        <span>Mensaje</span><br />
                        <textarea name="message" rows={10} cols={70}></textarea>
                    </div>

                    <br /><br />
                    <button>ENVIAR</button>

                </form>

            </ContentWrapper>
        </div>
    )
}