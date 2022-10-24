/** @format */

import assets from './assets/index';
import './App.less';

import MenuBar from './components/MenuBar/MenuBar';
import HeaderBasic from './components/HeaderBasic/HeaderBasic';
import ModTitle from './components/ModTitle/ModTitle';

function App() {
	return (
		<div className="App">
			<MenuBar logo={assets.images.menuBar} />
			<div className="App__container">
				<HeaderBasic
					images={assets.images.headerBasicImages}
					texts={assets.texts.headerBasic}
				/>
				<ModTitle type="left" texts={assets.texts.modTitle1} />
				<ModTitle type="right" texts={assets.texts.modTitle2} />
			</div>
		</div>
	);
}

export default App;
