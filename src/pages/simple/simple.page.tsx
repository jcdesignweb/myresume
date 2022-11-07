
import './simple-page.scss'

import { ProgressBar } from 'react-materialize';

export default function SimplePage() {

    return (
        <div id="simple" className="s-container">
            <div className='header'>
                <nav className='navbar black'>
                    <ul>
                        <li><a href="#">Intro / Habilidades</a></li>
                        <li><a href="#">Experiencia</a></li>
                        <li><a href="#">Trabajos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>




            </div>
            <div id="content">
                <div className="card-simple resume">
                    <h2 className='title'>Introducción</h2>
                    <p>Desarrollador de software con mas de 10 años de experiencia. A lo largo de toda mi carrera he trabajado en varias empresas de diferentes índoles. <br />
                        He trabajado como Fullstack developer como asi tambien Mobile aunque me gusta mas trabajar del lado del Back/Front end usando tecnologias como Javascript, PHP, Python

                        
                    </p>
                    
                    
                </div>

                <div className="card-simple skills">
                    <h2 className='title'>Habilidades</h2>

                    <ul>
                        <li><span>PHP</span><ProgressBar progress={70} /></li>
                    </ul>
                </div>
                <div className="card-simple studies">
                    <h2 className='title'>Estudios</h2>
                </div>
                <div className="card-simple works">

                </div>



            </div>
            
            <br /><br /><br /><br /><br /><br /><br />


        </div>
    )
}