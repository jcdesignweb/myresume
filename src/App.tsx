import Menu from './components/menu/menu.component';
import CloseButton from './components/close-button/close-button.component';
import Pages from './pages/index.page';
import { onClickEnterButton } from './services/behaviour.service';

import './App.css'


function App() {

	return (
		<div className="App">

			<main>
				<Menu />

				<div className="pop-animation">

					<a onClick={onClickEnterButton} id="btnEnter">Ingresar
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</a>

				</div>
				<section id="me">
					<div className="presentation">
						<div className="pres-left">

							<Pages />

						</div>
						<div className="pres-right">
							<div className='top-menu'>
								<CloseButton />
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default App
