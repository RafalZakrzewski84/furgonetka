/** @format */

import assets from './assets/index';
import './App.less';

import MenuBar from './components/MenuBar/MenuBar';
import HeaderBasic from './components/HeaderBasic/HeaderBasic';

function App() {
	return (
		<div className="App">
			<MenuBar logo={assets.images.menuBar} />
			<HeaderBasic
				images={assets.images.headerBasicImages}
				texts={assets.texts.headerBasic}
			/>
		</div>
	);
}

export default App;
